import { AvatarWrapper, EllipseImage } from './Avatar.styled';
import { ellipse1x, ellipse2x } from '../../media';

export const Avatar = ({ avatar }) => {
  const { url1x, url2x } = avatar;
  return (
    <AvatarWrapper>
      <picture>
        <source srcSet={`${ellipse1x} 1x,${ellipse2x} 2x`} />
        <EllipseImage src={ellipse1x} alt="ellipse" width="80" height="80" />
      </picture>
      <picture>
        <source srcSet={`${url1x} 1x,${url2x} 2x`} />
        <img src={url1x} alt="avatar" width="62" height="62" />
      </picture>
    </AvatarWrapper>
  );
};
