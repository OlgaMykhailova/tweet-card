import { ButtonStyled } from './Button.styled';

export const Button = ({ handleClick, isFollowing, children }) => {
  return (
    <ButtonStyled type="button" onClick={handleClick} active={isFollowing}>
      {children}
    </ButtonStyled>
  );
};
