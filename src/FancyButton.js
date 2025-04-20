import React from 'react';
import styled from 'styled-components';

const FancyButton = ({ children, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <span>{children}</span>
      </button>
    </StyledWrapper>
  );
};

export default FancyButton;

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  button {
    position: relative;
    overflow: hidden;
    background: transparent;
    color: #fff;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 20px 30px;
    cursor: pointer;
    perspective: 30rem;
    border-radius: 10px;
    z-index: 0;
  }

  button::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: linear-gradient(
      320deg,
      rgba(0, 140, 255, 0.678),
      rgba(128, 0, 128, 0.308)
    );
    z-index: -1;
    transition: background 3s;
  }

  button:hover::before {
    animation: rotate 1s;
    transition: all 0.5s;
  }

  @keyframes rotate {
    0% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }
`;