import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 196px;
  height: 50px;
  margin-bottom: 36px;
  cursor: pointer;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  scale: 1;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus-visible {
    scale: 1.03;
  }
  ${({ active }) =>
    active &&
    `    background-color: #5CD3A8;
  `}
`;
