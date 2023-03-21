import { AvatarWrapper, EllipseImage } from './Avatar.styled';
import { ellipse1x, ellipse2x, avatar1x, avatar2x } from '../../media';

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <picture>
        <source srcSet={`${ellipse1x} 1x,${ellipse2x} 2x`} />
        <EllipseImage src={ellipse1x} alt="ellipse" width="80" height="80" />
      </picture>
      <picture>
        <source srcSet={`${avatar1x} 1x,${avatar2x} 2x`} />
        <img src={avatar1x} alt="avatar" width="62" height="62" />
      </picture>
    </AvatarWrapper>
  );
};
