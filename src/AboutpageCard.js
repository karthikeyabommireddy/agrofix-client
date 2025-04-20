import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <h1>{children}</h1> {/* 👈 Accept and display text */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    border-radius: 30px;
    background: #FFD700;
    opacity: 0.85;
    box-shadow: 15px 15px 30px #255F38;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .card h1 {
    font-size: 20px;
    font-weight: bold;
    color: #255F38;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

export default Card;