import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import Modal from '../../../../ui/Modal';
import UserListItem, { UserListItemProps } from '../../../../ui/UserListItem';

import { noop } from '../../../../utils/utils';
import { useChannelSettingsContext } from '../../context/ChannelSettingsProvider';
import { useLocalization } from '../../../../lib/LocalizationContext';
import { BannedUserListQuery, RestrictedUser } from '@sendbird/chat';
import { useOnScrollPositionChangeDetector } from '../../../../hooks/useOnScrollReachedEndDetector';
import { UserListItemMenu } from '../../../../ui/UserListItemMenu';

export interface BannedUsersModalProps {
  onCancel(): void;
  renderUserListItem?: (props: UserListItemProps) => ReactNode;
}

export function BannedUsersModal({
  onCancel,
  renderUserListItem = (props) => <UserListItem {...props} />,
}: BannedUsersModalProps): ReactElement {
  const [members, setMembers] = useState<RestrictedUser[]>([]);
  const [memberQuery, setMemberQuery] = useState<BannedUserListQuery | null>(null);
  const { channel } = useChannelSettingsContext();
  const { stringSet } = useLocalization();

  useEffect(() => {
    const bannedUserListQuery = channel?.createBannedUserListQuery();
    if (bannedUserListQuery) {
      bannedUserListQuery.next().then((users) => {
        setMembers(users);
      });
      setMemberQuery(bannedUserListQuery);
    }
  }, []);
  return (
    <div>
      <Modal
        isFullScreenOnMobile
        hideFooter
        onCancel={() => onCancel()}
        onSubmit={noop}
        titleText={stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE}
      >
        <div
          className="sendbird-more-members__popup-scroll"
          onScroll={useOnScrollPositionChangeDetector({
            onReachedBottom: async () => {
              if (!memberQuery) return;
              const { hasNext } = memberQuery;
              if (hasNext) {
                memberQuery.next().then((o) => {
                  setMembers([
                    ...members,
                    ...o,
                  ]);
                });
              }
            },
          })}
        >
          {members.map((member) => (
            renderUserListItem({
              user: member,
              channel,
              renderListItemMenu: (props) => (
                <UserListItemMenu
                  {...props}
                  isBanned
                  onToggleBanState={() => {
                    setMembers(members.filter(m => {
                      return (m.userId !== member.userId);
                    }));
                  }}
                  renderMenuItems={({ items }) => <items.BanToggleMenuItem />}
                />
              ),
            })
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default BannedUsersModal;
