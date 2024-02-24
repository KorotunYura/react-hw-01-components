import {
  Avatar,
  Description,
  Name,
  ProfileContainer,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers:</Label>
          <Quantity> {followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views:</Label>
          <Quantity> {views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes:</Label>
          <Quantity> {likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};
