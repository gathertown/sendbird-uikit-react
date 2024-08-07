import React, {
  ReactElement,
  useEffect,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from 'react';
import type { User } from '@sendbird/chat';

import { LocalizationContext } from '../../../../lib/LocalizationContext';
import { useChannelSettingsContext } from '../../context/ChannelSettingsProvider';

import Button, { ButtonTypes, ButtonSizes } from '../../../../ui/Button';
import UserListItemMenu from '../../../../ui/UserListItemMenu/UserListItemMenu';

import UserListItem, { UserListItemProps } from '../../../../ui/UserListItem';
import OperatorsModal from './OperatorsModal';
import AddOperatorsModal from './AddOperatorsModal';

interface OperatorListProps {
  renderUserListItem?: (props: UserListItemProps) => ReactNode;
}
export const OperatorList = ({
  renderUserListItem = (props) => <UserListItem {...props} />,
}: OperatorListProps): ReactElement => {
  const [operators, setOperators] = useState<User[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const { stringSet } = useContext(LocalizationContext);
  const { channel } = useChannelSettingsContext();

  const refreshList = useCallback(() => {
    if (!channel) {
      setOperators([]);
      return;
    }
    const operatorListQuery = channel?.createOperatorListQuery({ limit: 10 });
    operatorListQuery.next().then((operators) => {
      setOperators(operators);
      setHasNext(operatorListQuery.hasNext);
    });
  }, [channel?.url, channel?.createOperatorListQuery]);
  useEffect(refreshList, [channel?.url]);

  return (
    <>
      {
        operators.map((operator) => (
          <React.Fragment key={operator.userId}>
            {
              renderUserListItem({
                user: operator,
                channel,
                size: 'small',
                avatarSize: '24px',
                renderListItemMenu: (props) => (
                  <UserListItemMenu {...props}
                    /**
                     * isOperator:
                     * The ReturnType of createOperatorListQuery is User[].
                     * We can't determine if this user is an operator, because User doesn't have a `role` property.
                     * Therefore, we need to explicitly specify that this user is an operator.
                    */
                    isOperator
                    onToggleOperatorState={() => {
                      // Limitation to server-side table update delay.
                      setTimeout(() => {
                        refreshList();
                      }, 500);
                    }}
                    renderMenuItems={({ items }) => (<items.OperatorToggleMenuItem />)}
                  />
                ),
              })
            }
          </React.Fragment>
        ))
      }
      <div className="sendbird-channel-settings-accordion__footer">
        <Button
          type={ButtonTypes.SECONDARY}
          size={ButtonSizes.SMALL}
          onClick={() => {
            setShowAdd(true);
          }}
        >
          {stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ADD}
        </Button>
        {
          hasNext && (
            <Button
              type={ButtonTypes.SECONDARY}
              size={ButtonSizes.SMALL}
              onClick={() => {
                setShowMore(true);
              }}
            >
              {stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL}
            </Button>
          )
        }
      </div>
      {
        showMore && (
          <OperatorsModal
            onCancel={() => {
              setShowMore(false);
              refreshList();
            }}
            renderUserListItem={renderUserListItem}
          />
        )
      }
      {
        showAdd && (
          <AddOperatorsModal
            onCancel={() => setShowAdd(false)}
            onSubmit={() => {
              /**
               * Limitation to server-side table update delay.
               */
              setTimeout(() => {
                refreshList();
              }, 500);
              setShowAdd(false);
            }}
            renderUserListItem={renderUserListItem}
          />
        )
      }
    </>
  );
};

export default OperatorList;
