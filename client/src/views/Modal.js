import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Telalogin from './TelaLogin'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalOverlayDiv />
    <ModalWrapperDiv aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalDiv>
        <ModalHeader >
          <ModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
        <Main>
          <Telalogin />
        </Main>
      </ModalDiv>
    </ModalWrapperDiv>
  </React.Fragment>, document.body
) : null;

export default Modal;

const ModalOverlayDiv = styled.div` /* fundo abaixo do modal */
    position: fixed;
    animation: none;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
`;

const ModalWrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 40%; //posição que ficará o modal
  z-index: 1050;
  max-width: 340px; // largura do da sombra modal
  
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const ModalDiv = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 10px;
  max-width: 500px;
  padding: 2rem;
  /* box-shadow: 0px 0px 45.4459px rgba(0, 0, 0, 0.3); */
`;

const ModalHeader =styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Main = styled.main`

`;

const  ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
  background:white;
`;