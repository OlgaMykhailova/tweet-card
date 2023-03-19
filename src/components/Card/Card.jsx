import { useState, useEffect } from 'react';
import {
  CardWrapper,
  LogoImage,
  PictureImage,
  AccentLine,
  BoyImage,
  Text,
  Button,
} from './Card.styled';
import {
  logo1x,
  logo2x,
  picture1x,
  picture2x,
  boy1x,
  boy2x,
} from '../../media';

export const Card = () => {
  const [isFollowing, setIsFolowing] = useState(false);
  const [followers, setFollowers] = useState(100500);

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
      <LogoImage>
        <source srcSet={`${logo1x} 1x,${logo2x} 2x`} />
        <img src={logo1x} alt="logo" width="76" height="20" />
      </LogoImage>
      <PictureImage>
        <source srcSet={`${picture1x} 1x,${picture2x} 2x`} />
        <img src={picture1x} alt="picture1x" width="308" height="168" />
      </PictureImage>
      <AccentLine />
      <BoyImage>
        <source srcSet={`${boy1x} 1x,${boy2x} 2x`} />
        <img src={boy1x} alt="boy" width="80" height="80" />
      </BoyImage>
      <Text>777 tweets</Text>
      <Text>{followers.toLocaleString('en-us')} followers</Text>
      <Button type="button" onClick={handleClick} active={isFollowing}>
        {isFollowing ? 'following' : 'follow'}
      </Button>
    </CardWrapper>
  );
};
