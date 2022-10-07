import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListStyle, FriendListItemStyle } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendListItemStyle key={friend.id} className="item">
          <FriendListItem friend={friend}></FriendListItem>
        </FriendListItemStyle>
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
