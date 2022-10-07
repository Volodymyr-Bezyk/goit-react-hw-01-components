import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
