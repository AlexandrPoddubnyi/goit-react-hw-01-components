import PropTypes from "prop-types";
import { RiUserFollowFill } from 'react-icons/ri';
import { GrView, GrLike } from 'react-icons/gr';
import { ProfileWrapper,StatsInfo,StatsItem,Image,StatsText } from './Profile.styled'


const Stats = ({icon: Icon, text}) => {
  return (
    <StatsItem>
      <span>
        <Icon size={24}  />
      </span>
      <StatsText>
        {text}
      </StatsText>
    </StatsItem>
  )
}

export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
  return (
    <ProfileWrapper>
      <div>
        <Image src={avatar} alt={username} height="128"/>
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <StatsInfo>
        <Stats text={`${followers}`} icon={RiUserFollowFill} />
        <Stats text={`${views}`} icon={GrView} />
        <Stats text={`${likes}`} icon={GrLike} />
      </StatsInfo>
    </ProfileWrapper>
    
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  })
}