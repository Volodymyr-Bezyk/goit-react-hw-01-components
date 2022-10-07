import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  Name,
  Picture,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsName,
  StatsQuantity,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Box
      width="min"
      ml={0}
      mr={0}
      p={5}
      border="custom"
      borderColor="accent"
      borderTopLeftRadius="primary"
      borderBottomRightRadius="primary"
      backgroundColor="bg"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="text"
      >
        <Picture src={avatar} alt={username} width="300" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <StatsList>
        <StatsItem>
          <StatsName>Followers:</StatsName>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsName>Views:</StatsName>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes:</StatsName>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
