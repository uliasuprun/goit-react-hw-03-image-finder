import styled from '@emotion/styled';

export const OverlayWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4; //1200
`;

export const ModalWindow = styled.div`
  max-width: 65vw;
  max-height: 100vh;
`;