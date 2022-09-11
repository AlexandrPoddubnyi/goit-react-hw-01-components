import PropTypes from "prop-types";
import {FriendsList,FriendsListItem,FriendsItemStatus,FriendsItemPhoto,FriendsItemName} from './FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <FriendsList>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendsListItem key={id}>
          <FriendsItemStatus isOnline={isOnline}></FriendsItemStatus>
          <FriendsItemPhoto src={avatar} alt={name} height="40" />
          <FriendsItemName>{name}</FriendsItemName>
        </FriendsListItem>))} 
    </FriendsList>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
  }))
}