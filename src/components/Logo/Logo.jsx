import { logo1x, logo2x } from 'media';
import { LogoImage } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoImage>
      <source srcSet={`${logo1x} 1x,${logo2x} 2x`} />
      <img src={logo1x} alt="logo" width="76" height="20" />
    </LogoImage>
  );
};
