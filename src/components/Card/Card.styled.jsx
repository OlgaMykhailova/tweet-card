import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImage = styled.picture`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const PictureImage = styled.picture`
  display: block;
  width: 308px;
  height: 168px;
  margin-top: 28px;
`;

export const AccentLine = styled.div`
  position: absolute;
  top: 214px;
  left: 0px;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const BoyImage = styled.picture`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  margin-bottom: 26px;
`;

export const Text = styled.p`
  margin-top: auto;
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  &:last-of-type {
    margin-top: 0;
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
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
  ${({ active }) =>
    active &&
    `
    background-color: #5CD3A8;
  `}
`;
