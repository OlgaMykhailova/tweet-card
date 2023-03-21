import { useState, useEffect } from 'react';
import { CardWrapper } from './Card.styled';
import { Logo } from 'components/Logo/Logo';
import { Button } from 'components/Button/Button';
import { Avatar } from 'components/Avatar/Avatar';
import { Text } from 'components/Text/Text';
import user from '../user.json';

export const Card = () => {
  const [isFollowing, setIsFolowing] = useState(false);
  const [followers, setFollowers] = useState(Number(user.followers));

  useEffect(() => {
    const localFollowers = JSON.parse(localStorage.getItem(`followers`));
    if (localFollowers) {
      setFollowers(localFollowers.followers);
      setIsFolowing(localFollowers.isFollowing);
      localStorage.clear(`followers`);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem(
      'followers',
      JSON.stringify(
        isFollowing
          ? { followers: followers - 1, isFollowing: false }
          : { followers: followers + 1, isFollowing: true }
      )
    );
    setFollowers(isFollowing ? prev => prev - 1 : prev => prev + 1);
    setIsFolowing(prev => !prev);
  };
  return (
    <CardWrapper>
      <Logo />
      <Avatar avatar={user.avatar} />
      <Text>{user.tweets} tweets</Text>
      <Text>{followers.toLocaleString('en-us')} followers</Text>
      <Button isFollowing={isFollowing} handleClick={handleClick}>
        {isFollowing ? 'following' : 'follow'}
      </Button>
    </CardWrapper>
  );
};
