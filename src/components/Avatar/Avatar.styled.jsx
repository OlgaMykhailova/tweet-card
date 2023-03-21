import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 178px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const EllipseImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
`;