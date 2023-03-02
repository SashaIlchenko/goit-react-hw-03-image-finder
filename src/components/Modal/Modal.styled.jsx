import styled from "@emotion/styled";

export const Backdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;`

export const ModalView = styled.div`
   max-width: calc(100vw - 196px);
  max-height: calc(100vh - 48px);`