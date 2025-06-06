import React from 'react';
import styled from 'styled-components';
import { useCart } from './context/CartContext'; // adjust path if needed

const ProductListCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">{product.name}</span>
            <p className="card-content">Best quality product!</p>
            <span className="see-more" onClick={() => addToCart(product)}>
              Add to Cart
            </span>
          </div>
          <div className="date-box">
            <span className="month">Price</span>
            <span className="date">₹{product.price}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 300px;
    padding: 20px;
    perspective: 1000px;
  }
  .card {
    padding-top: 50px;
    border: 3px solid rgb(255, 255, 255);
    transform-style: preserve-3d;
    background: linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0),
        repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 0;
    background-color: #f0f0f0;
    width: 100%;
    box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }
  .card:hover {
    background-position: -100px 100px, -100px 100px;
    transform: rotate3d(0.5, 1, 0, 30deg);
  }
  .content-box {
    background: rgba(4, 193, 250, 0.732);
    padding: 60px 25px 25px 25px;
    transform-style: preserve-3d;
  }
  .card-title {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    transform: translate3d(0px, 0px, 50px);
  }
  .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transform: translate3d(0px, 0px, 30px);
  }
  .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: rgb(7, 185, 255);
    background: white;
    padding: 0.5rem 0.7rem;
    transform: translate3d(0px, 0px, 20px);
  }
  .date-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background: white;
    border: 1px solid rgb(7, 185, 255);
    padding: 8px 8px 6px 8px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
  }
  .date-box span {
    display: block;
    text-align: center;
  }
  .month {
    color: rgb(4, 193, 250);
    font-size: 12px;
    font-weight: 700;
  }
  .date {
    font-size: 24px;
    font-weight: 900;
    color: rgb(4, 193, 250);
  }
`;

export default ProductListCard;