import React, { MutableRefObject, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import './index.scss';
import { MessageInputKeys, NodeTypes } from './const';

import { USER_MENTION_TEMP_CHAR } from '../../modules/Channel/context/const';
import IconButton from '../IconButton';
import Button, { ButtonSizes, ButtonTypes } from '../Button';
import renderMentionLabelToString from '../MentionUserLabel/renderToString';
import Icon, { IconColors, IconTypes } from '../Icon';
import Label, { LabelColors, LabelTypography } from '../Label';
import { useLocalization } from '../../lib/LocalizationContext';
import useSendbirdStateContext from '../../hooks/useSendbirdStateContext';

import { extractTextAndMentions, isChannelTypeSupportsMultipleFilesMessage, nodeListToArray, sanitizeString } from './utils';
import { arrayEqual, getClassName, getMimeTypesUIKitAccepts } from '../../utils';
import usePaste from './hooks/usePaste';
import { tokenizeMessage } from '../../modules/Message/utils/tokens/tokenize';
import { USER_MENTION_PREFIX } from '../../modules/Message/consts';
import { TOKEN_TYPES } from '../../modules/Message/utils/tokens/types';
import { checkIfFileUploadEnabled } from './messageInputUtils';
import { classnames } from '../../utils/utils';
import { isMobileIOS } from '../../utils/browser';

import { GroupChannel } from '@sendbird/chat/groupChannel';
import { User } from '@sendbird/chat';
import { OpenChannel } from '@sendbird/chat/openChannel';
import { UserMessage } from '@sendbird/chat/message';
import { DraftMessage, MessageInputCallbackRef } from '../../types';

import { useDebounce } from '../../hooks/useDebounce';

const TEXT_FIELD_ID = 'sendbird-message-input-text-field';
const LINE_HEIGHT = 76;
const DEFAULT_CHAT_VIEW_HEIGHT = 600;
const noop = () => {
  return null;
};

const displayCaret = (element: HTMLInputElement, position: number) => {
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(element.childNodes[0], position);
  range.collapse(true);
  sel?.removeAllRanges();
  sel?.addRange(range);
  element.focus();
};

const moveCursorToEnd = (element: HTMLInputElement) => {
  const range = document.createRange();
  const selection = window.getSelection();
  range.setStart(element, element.childNodes.length);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
};

const resetInput = (ref: MutableRefObject<HTMLElement>) => {
  try {
    ref.current.innerHTML = '';
  } catch {
    //
  }
};

interface TargetStringInfo {
  targetString: string;
  startNodeIndex: number | null;
  startOffsetIndex: number | null;
  endNodeIndex: number | null;
  endOffsetIndex: number | null;
}

const initialTargetStringInfo: TargetStringInfo = {
  targetString: '',
  startNodeIndex: null,
  startOffsetIndex: null,
  endNodeIndex: null,
  endOffsetIndex: null,
};

type MessageInputProps = {
  channel: GroupChannel | OpenChannel;
  message?: UserMessage | DraftMessage;
  value?: null | string;
  className?: string | string[];
  messageFieldId?: string;
  isEdit?: boolean;
  isMobile?: boolean;
  isMentionEnabled?: boolean;
  isVoiceMessageEnabled?: boolean;
  isSelectingMultipleFilesEnabled?: boolean;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  onFileUpload?: (file: File[]) => void;
  onSendMessage?: (params: { message: string; mentionTemplate: string }) => void;
  onUpdateMessage?: (params: { messageId: number; message: string; mentionTemplate: string }) => void;
  onCancelEdit?: () => void;
  onStartTyping?: () => void;
  channelUrl?: string;
  mentionSelectedUser?: null | User;
  onUserMentioned?: (user: User) => void;
  onMentionStringChange?: (mentionString: string) => void;
  onMentionedUserIdsUpdated?: (mentionedUserIds: string[]) => void;
  onVoiceMessageIconClick?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLDivElement>) => boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => boolean;
  renderVoiceMessageIcon?: () => React.ReactNode;
  renderFileUploadIcon?: () => React.ReactNode;
  renderSendMessageIcon?: () => React.ReactNode;
  setMentionedUsers?: React.Dispatch<React.SetStateAction<User[]>>;
  acceptableMimeTypes?: string[];

  // custom props
  callbackRefs?: React.RefObject<MessageInputCallbackRef>;
  inputAreaPrefix?: React.ReactNode;
  inputAreaButtons?: React.ReactNode;
  onPaste?: (e: React.ClipboardEvent<HTMLDivElement>) => boolean;
  onDraftChange?: (draftMessage: DraftMessage) => void;
};
const MessageInput = React.forwardRef<HTMLInputElement, MessageInputProps>((props, externalRef) => {
  const {
    channel,
    className = '',
    messageFieldId = '',
    isEdit = false,
    isMobile = false,
    isMentionEnabled = false,
    isVoiceMessageEnabled = true,
    isSelectingMultipleFilesEnabled = false,
    disabled = false,
    message = null,
    placeholder = '',
    maxLength = 5000,
    onFileUpload = noop,
    onSendMessage = noop,
    onUpdateMessage = noop,
    onCancelEdit = noop,
    onStartTyping = noop,
    channelUrl = '',
    mentionSelectedUser = null,
    onUserMentioned = noop,
    onMentionStringChange = noop,
    onMentionedUserIdsUpdated = noop,
    onVoiceMessageIconClick = noop,
    onKeyUp = noop,
    onKeyDown = noop,
    renderFileUploadIcon = noop,
    renderVoiceMessageIcon = noop,
    renderSendMessageIcon = noop,
    setMentionedUsers = noop,
    acceptableMimeTypes,

    // custom props
    callbackRefs,
    inputAreaPrefix,
    inputAreaButtons,
    onDraftChange,
    onPaste: customOnFilePaste,
  } = props;

  const internalRef = (externalRef && 'current' in externalRef) ? externalRef : null;
  const ghostInputRef = useRef<HTMLInputElement>(null);

  const textFieldId = messageFieldId || TEXT_FIELD_ID;
  const { stringSet } = useLocalization();
  const { config } = useSendbirdStateContext();

  const isFileUploadEnabled = checkIfFileUploadEnabled({
    channel,
    config,
  });

  const fileInputRef = useRef<HTMLInputElement>();
  const [isInput, setIsInput] = useState(false);
  const [mentionedUserIds, setMentionedUserIds] = useState<string[]>([]);
  const [targetStringInfo, setTargetStringInfo] = useState({ ...initialTargetStringInfo });
  const setHeight = useCallback(
    () => {
      const elem = internalRef?.current;
      if (!elem) return;

      try {
        const estimatedChatViewHeight = window.document.body.offsetHeight || DEFAULT_CHAT_VIEW_HEIGHT;
        const MAX_HEIGHT = estimatedChatViewHeight * 0.6;
        if (elem.scrollHeight >= LINE_HEIGHT) {
          if (MAX_HEIGHT < elem.scrollHeight) {
            elem.style.height = 'auto';
            elem.style.height = `${MAX_HEIGHT}px`;
          } else {
            elem.style.height = '';
          }
        }
      } catch (error) {
        // error
      }
    },
    [],
  );

  // fork notes: process the current input to save as draft
  const processDraftChangeImmediate = useCallback(() => {
    const textField = internalRef?.current;
    if (!textField) return;

    const { messageText, mentionTemplate } = extractTextAndMentions(textField.childNodes);
    const draftMessage: DraftMessage = {
      messageId: null, // no message id because it was not sent yet
      mentionedUsers: null, // note: mentionedUsers is not kept in this component
      mentionedMessageTemplate: mentionTemplate,
      message: messageText,
    };
    onDraftChange?.(draftMessage);
  }, [onDraftChange]);
  const processDraftChangeDebounced = useDebounce(processDraftChangeImmediate, 400);

  // #Edit mode
  // for easilly initialize input value from outside, but
  // useEffect(_, [channelUrl]) erase it
  const initialValue = props?.value;
  useEffect(() => {
    const textField = internalRef?.current;
    try {
      if (textField && initialValue) {
        textField.innerHTML = initialValue;
        displayCaret(textField, initialValue?.length);
      }
    } catch {
      //
    }
    setMentionedUserIds([]);
    setIsInput(textField?.textContent ? textField.textContent.trim().length > 0 : false);
    setHeight();
  }, [initialValue]);

  // #Mention | Clear input value when channel changes
  useEffect(() => {
    if (!isEdit) {
      setIsInput(false);
      resetInput(internalRef);
    }
  }, [channelUrl]);

  // #Mention & #Edit | Fill message input values
  useEffect(() => {
    // fork note: allow loading from custom 'draftMessage'
    if (message) {
      // const textField = document.getElementById(textFieldId);
      const textField = internalRef?.current;
      if (isMentionEnabled
        && message?.mentionedUsers
        && message.mentionedUsers.length > 0
        && message?.mentionedMessageTemplate
        && message.mentionedMessageTemplate.length > 0) {
        /* mention enabled */
        const { mentionedUsers = [] } = message;
        const tokens = tokenizeMessage({
          messageText: message?.mentionedMessageTemplate || '',
          mentionedUsers,
          includeMarkdown: channel.isGroupChannel() && config.groupChannel.enableMarkdownForUserMessage,
        });
        if (textField) {
          textField.innerHTML = tokens
            .map((token) => {
              if (token.type === TOKEN_TYPES.mention) {
                const mentionedUser = mentionedUsers.find((user) => user.userId === token.userId);
                // fork note: bug fix
                const nickname = `${USER_MENTION_PREFIX}${mentionedUser?.nickname || token.value || stringSet.MENTION_NAME__NO_NAME}`;
                return renderMentionLabelToString({
                  userId: token.userId,
                  nickname,
                });
              }
              return sanitizeString(token.value);
            })
            // fork note: bug fix
            .join('');
        }

        // fork note: make sure the userids are updated
        const userIds = mentionedUsers.map((user) => user.userId);
        onMentionedUserIdsUpdated(userIds);
        setMentionedUserIds(userIds);
      } else {
        /* mention disabled */
        try {
          if (textField) {
            textField.innerHTML = sanitizeString(message?.message) ?? '';
          }
        } catch {
          //
        }
        setMentionedUserIds([]);
      }
      setIsInput(textField?.textContent ? textField?.textContent?.trim().length > 0 : false);
      setHeight();
      // fork note: force the cursor to the end if loading a draft message or editing
      moveCursorToEnd(textField);
    }
  }, [isEdit, message]);

  // #Mention | Detect MentionedLabel modified
  const useMentionedLabelDetection = useCallback(() => {
    const textField = internalRef?.current;
    if (isMentionEnabled && textField) {
      const newMentionedUserIds = Array.from(textField.getElementsByClassName('sendbird-mention-user-label')).map(
        // @ts-ignore
        (node) => node?.dataset?.userid,
      );
      if (!arrayEqual(mentionedUserIds, newMentionedUserIds) || newMentionedUserIds.length === 0) {
        onMentionedUserIdsUpdated(newMentionedUserIds);
        setMentionedUserIds(newMentionedUserIds);
      }
    }
    setIsInput(textField.textContent?.trim().length > 0);
    processDraftChangeDebounced();
  }, [targetStringInfo, isMentionEnabled]);

  // #Mention | Replace selected user nickname to the MentionedUserLabel
  useEffect(() => {
    if (isMentionEnabled && mentionSelectedUser) {
      const { targetString, startNodeIndex, startOffsetIndex, endNodeIndex, endOffsetIndex } = targetStringInfo;
      const textField = internalRef?.current;
      if (targetString && startNodeIndex !== null && startOffsetIndex !== null && endOffsetIndex !== null && endNodeIndex !== null && textField) {
        // const textField = document.getElementById(textFieldId);
        const childNodes = nodeListToArray(textField?.childNodes);
        const startNodeTextContent: string = childNodes[startNodeIndex]?.textContent ?? '';
        const frontTextNode = document.createTextNode(
          startNodeTextContent.slice(0, startOffsetIndex),
        );
        const endNodeTextContent: string = childNodes[endNodeIndex]?.textContent ?? '';
        const backTextNode = endOffsetIndex && document.createTextNode(
          `\u00A0${endNodeTextContent.slice(endOffsetIndex)}`,
        );
        const mentionLabel = renderMentionLabelToString({
          userId: mentionSelectedUser?.userId,
          nickname: `${USER_MENTION_TEMP_CHAR}${mentionSelectedUser?.nickname || stringSet.MENTION_NAME__NO_NAME}`,
        });
        const div = document.createElement('div');
        div.innerHTML = mentionLabel;
        const newNodes = [
          ...childNodes.slice(0, startNodeIndex),
          frontTextNode,
          div.childNodes[0],
          backTextNode,
          ...childNodes.slice(endNodeIndex + 1),
        ];
        if (textField) {
          textField.innerHTML = '';
          newNodes.forEach((newNode) => {
            if (newNode) {
              textField.appendChild(newNode);
            }
          });
        }
        onUserMentioned(mentionSelectedUser);
        if (window.getSelection || document.getSelection) {
          // set caret postion
          const selection = window.getSelection() || document.getSelection();
          selection?.removeAllRanges();
          const range = new Range();
          range.selectNodeContents(textField);
          range.setStart(textField.childNodes[startNodeIndex + 2], 1);
          range.setEnd(textField.childNodes[startNodeIndex + 2], 1);
          range.collapse(false);
          selection?.addRange(range);
          textField.focus();
        }
        setTargetStringInfo({ ...initialTargetStringInfo });
        setHeight();
        useMentionedLabelDetection();
      }
      processDraftChangeDebounced();
    }
  }, [mentionSelectedUser, isMentionEnabled]);

  // #Mention | Detect mentioning user nickname
  const useMentionInputDetection = useCallback(() => {
    const selection = window?.getSelection?.() || document?.getSelection?.();
    const textField = internalRef?.current;
    if (selection?.anchorNode === textField) {
      onMentionStringChange('');
    }
    if (
      isMentionEnabled
      && textField
      && selection
      && selection.anchorNode === selection.focusNode
      && selection.anchorOffset === selection.focusOffset
    ) {
      let textStack = '';
      let startNodeIndex: number | null = null;
      let startOffsetIndex: number | null = null;
      for (let index = 0; index < textField.childNodes.length; index += 1) {
        const currentNode = textField.childNodes[index];
        if (currentNode.nodeType === NodeTypes.TextNode) {
          /* text node */
          const textContent: string = ((): string => {
            if (currentNode === selection.anchorNode) {
              return currentNode?.textContent ? currentNode?.textContent.slice(0, selection.anchorOffset) : '';
            }
            return currentNode?.textContent ?? '';
          })();
          if (textStack.length > 0) {
            textStack += textContent;
          } else {
            let charLastIndex = textContent.lastIndexOf(USER_MENTION_TEMP_CHAR);
            for (let i = charLastIndex - 1; i > -1; i -= 1) {
              if (textContent[i] === USER_MENTION_TEMP_CHAR) {
                charLastIndex = i;
              } else {
                break;
              }
            }
            if (charLastIndex > -1) {
              textStack = textContent;
              startNodeIndex = index;
              startOffsetIndex = charLastIndex;
            }
          }
        } else {
          /* other nodes */
          textStack = '';
          startNodeIndex = null;
          startOffsetIndex = null;
        }
        if (currentNode === selection.anchorNode) {
          /**
           * targetString could be ''
           * startNodeIndex and startOffsetIndex could be null
           */
          const targetString = textStack && startOffsetIndex !== null ? textStack.slice(startOffsetIndex) : ''; // include template character
          setTargetStringInfo({
            targetString,
            startNodeIndex,
            startOffsetIndex,
            endNodeIndex: index,
            endOffsetIndex: selection.anchorOffset,
          });
          onMentionStringChange(targetString);
          return;
        }
      }
    }
  }, [isMentionEnabled]);

  const sendMessage = () => {
    const textField = internalRef?.current;
    // fork note: allow "sending" empty message as other things can be added (i.e. attachments)
    if (!isEdit) {
      const { messageText, mentionTemplate } = extractTextAndMentions(textField.childNodes);
      const params = { message: messageText, mentionTemplate };
      onSendMessage(params);
      resetInput(internalRef);

      /**
       * Note: contentEditable does not work as expected in mobile WebKit (Safari).
       * @see https://github.com/sendbird/sendbird-uikit-react/pull/1108
       */
      if (isMobileIOS(navigator.userAgent)) {
        if (ghostInputRef.current) ghostInputRef.current.focus();
        requestAnimationFrame(() => textField.focus());
      } else {
        // important: keeps the keyboard open -> must add test on refactor
        textField.focus();
      }

      setIsInput(false);
      setHeight();
      // fork note: make sure draft is cleared
      processDraftChangeImmediate();
    }
  };
  const isEditDisabled = !internalRef?.current?.textContent?.trim();
  const editMessage = () => {
    const textField = internalRef?.current;
    const messageId = message?.messageId;
    if (isEdit && messageId && textField) {
      const { messageText, mentionTemplate } = extractTextAndMentions(textField.childNodes);
      const params = { messageId, message: messageText, mentionTemplate };
      onUpdateMessage(params);
      resetInput(internalRef);
      // fork note: make sure draft is cleared
      processDraftChangeImmediate();
    }
  };
  const onPaste = usePaste({
    ref: internalRef,
    setMentionedUsers,
    channel,
    setIsInput,
    setHeight,
    customOnFilePaste,
    onChange: processDraftChangeImmediate,
  });

  // fork note: use a shared onInputChanged callback to be used whenever the input changed
  const onInputChanged = useCallback(
    () => {
      setHeight();
      onStartTyping();
      const textContentLength = internalRef?.current?.textContent?.trim().length;
      setIsInput(textContentLength > 0);
      useMentionedLabelDetection();

      if (textContentLength < 15) {
        // short text, no need to debounce
        // at least, it's important that we process immediately if the contents changes between empty and non-empty states
        processDraftChangeImmediate();
      } else {
        processDraftChangeDebounced();
      }
    }, [setHeight, onStartTyping, setIsInput, useMentionedLabelDetection, processDraftChangeImmediate],
  );
  // fork note: use MutationObserver to also track emojis being inserted into the text
  useEffect(() => {
    if (internalRef?.current) {
      const observer = new MutationObserver(onInputChanged);
      observer.observe(internalRef.current, {
        childList: true,
        subtree: true,
      });
      return () => observer.disconnect();
    }
  }, [internalRef, onInputChanged]);

  // fork note: allows for externally invoking important lifecycle handlers
  useImperativeHandle(callbackRefs, () => ({
    sendMessage: () => {sendMessage();},
    saveMessageEdit: () => {editMessage();},
    cancelMessageEdit: () => {onCancelEdit?.();},
    mentionInputDetection: () => {useMentionInputDetection();}
  }));

  return (
    <form
      className={getClassName([
        className,
        isEdit ? 'sendbird-message-input__edit' : '',
        disabled ? 'sendbird-message-input-form__disabled' : '',
      ])}
    >
      {/* fork note: inputAreaPrefix for custom rendering of attachments */}
      {inputAreaPrefix}
      <div
        className={getClassName(['sendbird-message-input', disabled ? 'sendbird-message-input__disabled' : ''])}
        onClick={() => {
          // forked note: this is so it focuses on the text input area if you click in the area around it
          internalRef?.current.focus();
        }}
      >
        <div
          id={`${textFieldId}${isEdit ? message?.messageId : ''}`}
          className={`sendbird-message-input--textarea ${textFieldId}`}
          contentEditable={!disabled}
          role="textbox"
          aria-label="Text Input"
          spellCheck="true"
          ref={externalRef}
          // @ts-ignore
          disabled={disabled}
          maxLength={maxLength}
          // fork note: autoFocus and tabIndex are to allow custom focusing of this div (eg open as soon as it becomes visible)
          autoFocus={true}
          tabIndex={0}
          onKeyDown={(e) => {
            const preventEvent = onKeyDown(e);
            if (preventEvent) {
              e.preventDefault();
            } else {
              if (
                !e.shiftKey
                && e.key === MessageInputKeys.Enter
                && !isMobile
                // fork note: we may have an unsent attachment that 'enter' should still send
                // && internalRef?.current?.textContent?.trim().length > 0
                && e?.nativeEvent?.isComposing !== true
                /**
                 * NOTE: What isComposing does?
                 * Check if the user has finished composing characters
                 * (e.g., for languages like Korean, Japanese, where characters are composed from multiple keystrokes)
                 * Prevents executing the code while the user is still composing characters.
                 */
              ) {
                /**
                 * NOTE: contentEditable does not work as expected in mobile WebKit(Safari).
                 * Events and properties related to composing, necessary for combining characters like Hangul, also seem to be not handled properly.
                 * When calling e.preventDefault(), it appears that string composition-related behaviors, in addition to the default actions, are also prevented. (maybe)
                 *
                 * Due to this issue, even though reset the input with innerHTML, incomplete text compositions from the previous input are displayed in the next input.
                 * */
                if (!isMobileIOS(navigator.userAgent)) {
                  e.preventDefault();
                }
                // fork note: allow enter to edit too
                if (isEdit) {
                  editMessage();
                } else {
                  sendMessage();
                }
              }
              // for note: escape to cancel edit, if editing
              if (e.key === 'Escape') {
                if (isEdit) {
                  onCancelEdit?.();
                }
              }
              if (
                e.key === MessageInputKeys.Backspace
                && internalRef?.current?.childNodes?.length === 2
                && !internalRef.current.childNodes[0].textContent
                && internalRef.current.childNodes[1].nodeType === NodeTypes.ElementNode
              ) {
                internalRef.current.removeChild(internalRef.current.childNodes[1]);
              }
            }
          }}
          onKeyUp={(e) => {
            const preventEvent = onKeyUp(e);
            if (preventEvent) {
              e.preventDefault();
            } else {
              useMentionInputDetection();
            }
          }}
          onClick={() => {
            useMentionInputDetection();
          }}
          onInput={() => {
            onInputChanged();
          }}
          onPaste={onPaste}
        />
        {/* placeholder */}
        {(internalRef?.current?.textContent?.length ?? 0) === 0 && !inputAreaPrefix && (
          <Label
            className="sendbird-message-input--placeholder"
            type={LabelTypography.BODY_1}
            color={disabled ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_3}
          >
            {placeholder || stringSet.MESSAGE_INPUT__PLACE_HOLDER}
          </Label>
        )}
        {/* fork note: inputAreaButtons for custom rendering of buttons next to the input */}
        {inputAreaButtons}
        {/* send icon */}
        {/* fork note: inputAreaPrefix is used for attachments, so user should be able to send, even if message is empty */}
        {!isEdit && (isInput || inputAreaPrefix) && (
          <IconButton className="sendbird-message-input--send" height="32px" width="32px" onClick={() => sendMessage()}>
            {renderSendMessageIcon?.() || (
              <Icon
                type={IconTypes.SEND}
                fillColor={disabled ? IconColors.ON_BACKGROUND_4 : IconColors.PRIMARY}
                width="20px"
                height="20px"
              />
            )}
          </IconButton>
        )}
        {/* file upload icon */}
        {!isEdit
          && !isInput
          && (renderFileUploadIcon?.()
            // UIKit Dashboard configuration should have lower priority than
            // renderFileUploadIcon which is set in code level
            || (isFileUploadEnabled && (
              <IconButton
                className={classnames('sendbird-message-input--attach', isVoiceMessageEnabled && 'is-voice-message-enabled')}
                height="32px"
                width="32px"
                onClick={() => {
                  // todo: clear previous input
                  fileInputRef?.current?.click?.();
                }}
              >
                <Icon
                  type={IconTypes.ATTACH}
                  fillColor={disabled ? IconColors.ON_BACKGROUND_4 : IconColors.CONTENT_INVERSE}
                  width="20px"
                  height="20px"
                />
                <input
                  className="sendbird-message-input--attach-input"
                  type="file"
                  ref={fileInputRef}
                  // It will affect to <Channel /> and <Thread />
                  onChange={(event) => {
                    const { files } = event.currentTarget;
                    if (files) {
                      onFileUpload(files && files.length === 1 ? [files[0]] : Array.from(files));
                    }
                    event.target.value = '';
                  }}
                  accept={getMimeTypesUIKitAccepts(acceptableMimeTypes)}
                  multiple={isSelectingMultipleFilesEnabled && isChannelTypeSupportsMultipleFilesMessage(channel)}
                />
              </IconButton>
            )))}
        {/* voice message input trigger */}
        {isVoiceMessageEnabled && !isEdit && !isInput && (
          <IconButton
            className="sendbird-message-input--voice-message"
            width="32px"
            height="32px"
            onClick={onVoiceMessageIconClick}
          >
            {renderVoiceMessageIcon?.() || (
              <Icon
                type={IconTypes.AUDIO_ON_LINED}
                fillColor={disabled ? IconColors.ON_BACKGROUND_4 : IconColors.CONTENT_INVERSE}
                width="20px"
                height="20px"
              />
            )}
          </IconButton>
        )}
      </div>
      {/* Edit */}
      {isEdit && (
        <div className="sendbird-message-input--edit-action" data-testid="sendbird-message-input--edit-action">
          <Button
            className="sendbird-message-input--edit-action__cancel"
            type={ButtonTypes.SECONDARY}
            size={ButtonSizes.SMALL}
            onClick={onCancelEdit}
          >
            {stringSet.BUTTON__CANCEL}
          </Button>
          <Button
            className="sendbird-message-input--edit-action__save"
            type={ButtonTypes.PRIMARY}
            size={ButtonSizes.SMALL}
            disabled={isEditDisabled}
            onClick={() => editMessage()}
          >
            {stringSet.BUTTON__SAVE}
          </Button>
        </div>
      )}
    </form>
  );
});

export default MessageInput;
