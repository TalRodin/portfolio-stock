import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Backdrop from './Backdrop';

const WrappedModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: ${({ opened }) =>
      opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 150;
    justify-content: center;
    opacity: ${({ opened }) => (opened ? '1' : '0')};
    visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
    width: 100%;
    max-width: 50rem;
    border-radius: 1rem;
    transition: all 0.1s;
`;

const InsideWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 4rem 3rem;
`;

// The window that pops up when the user decided to buy the stock
const Modal = ({ opened, close, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop close={close} opened={opened} />
      <WrappedModal opened={opened}>
        <InsideWrapper>{children}</InsideWrapper>
      </WrappedModal>
    </>,
    document.getElementById('root-modal')
  );
};

export default Modal;