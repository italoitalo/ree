import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

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
        <p>
          Login.
        </p>
      </ModalDiv>
    </ModalWrapperDiv>
  </React.Fragment>, document.body
) : null;

export default Modal;

const ModalOverlayDiv = styled.div`
  position: fixed;
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
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalDiv = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`;
const ModalHeader =styled.div`
    display: flex;
    justify-content: flex-end;

`;

const  ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`;