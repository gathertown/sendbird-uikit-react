import { GroupChannel, Member } from '@sendbird/chat/groupChannel';

export async function fetchMembersFromChannel(
  currentUserId: string,
  channel: GroupChannel,
  maxSuggestionCount: number,
  searchString: string,
): Promise<Member[]> {
  return channel.members
    .sort((a, b) => a.nickname?.localeCompare(b.nickname))
    .filter(
      (member) => member.nickname?.toLowerCase().startsWith(searchString.toLowerCase())
        // fork note: we want to be able to allow users to tag themselves
        // TODO check if Taha answered why this doesnt work :(
        // && member.userId !== currentUserId
        && member.isActive,
    ).slice(0, maxSuggestionCount);
}

export async function fetchMembersFromQuery(
  currentUserId: string,
  channel: GroupChannel,
  maxSuggestionCount: number,
  searchString: string,
): Promise<Member[]> {
  const query = channel.createMemberListQuery({
    // fork note: current user is valid
    // limit: maxSuggestionCount + 1, // because current user could be included
    limit: maxSuggestionCount,
    nicknameStartsWithFilter: searchString,
  });
  return query.next()
    .then((memberList) => {
      return memberList
        // fork note: we want to be able to allow users to tag themselves
        // .filter((member) => currentUserId !== member?.userId)
        // TODO check if Taha answered why this doesnt work :(
        .slice(0, maxSuggestionCount);
    });
}
