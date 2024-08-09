import type { User } from '@sendbird/chat';
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import type { OpenChannel } from '@sendbird/chat/openChannel';

export type Word = {
  text: string;
  userId?: string;
};

export type DynamicProps = {
  ref: React.RefObject<HTMLInputElement> | null;
  channel: OpenChannel | GroupChannel;
  setMentionedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
  setHeight: () => void;

  /* fork notes: custom callbacks */
  // called before any uikit code when there's a paste event.
  // if callback returns true, uikit's code will not be executed
  customOnFilePaste?: (e: React.ClipboardEvent<HTMLDivElement>) => boolean;
  // called if there was any change to the value
  onChange?: () => void;
};
