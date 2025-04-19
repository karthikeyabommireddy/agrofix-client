import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const OrderTracker = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const fetchOrder = () => {
    if (!orderId) return;

    axios
      .get(`http://localhost:5000/orders/${orderId}`)
      .then((res) => {
        setOrder(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("Error:", err);
        setOrder(null);
        setError("Order not found");
      });
  };

  return (
    <Wrapper>
      <div className="form">
        <input
          type="number"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button onClick={fetchOrder}>Track</button>
      </div>

      {error && <p className="error">{error}</p>}

      {order && (
        <CardWrapper>
          <div className="card">
          <div className="card-content">
  <h3 className="order-id">Order #{order.id}</h3>

  <div className="info">
    <p><span>👤 Name:</span> {order.buyer_name}</p>
    <p><span>📞 Contact:</span> {order.contact}</p>
    <p><span>📍 Address:</span> {order.address}</p>
    <p><span>📦 Status:</span> <strong className={`status ${order.status.toLowerCase()}`}>{order.status}</strong></p>
  </div>

  <div className="items">
    <p>🛒 <strong>Items Ordered:</strong></p>
    <ul>
      {order.items.map((item, i) => (
        <li key={i}>
          <span className="dot">•</span> {item.product} × {item.quantity}
        </li>
      ))}
    </ul>
  </div>
</div>

          </div>
        </CardWrapper>
      )}
    </Wrapper>
  );
};

export default OrderTracker;



const Wrapper = styled.div`
  text-align: center;
  padding: 30px;

  .form {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  input {
    padding: 12px;
    border-radius: 8px;
    border: 2px solid #ccc;
    font-size: 16px;
    width: 240px;
    outline: none;
  }

  input:focus {
    border-color: #58bc82;
  }

  button {
    padding: 12px 25px;
    border-radius: 8px;
    border: none;
    background: linear-gradient(135deg, #00b7ff, #ff30ff);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: linear-gradient(135deg, #51ff00, #a200ff);
  }

  .error {
    color: red;
    margin-top: 10px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;

  .card-content {
  z-index: 1;
  position: relative;
  text-align: left;
  font-family: 'Segoe UI', sans-serif;
  padding: 5px;
}

.order-id {
  color: #00ffff;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
}

.info p {
  margin: 5px 0;
  font-size: 15px;
  color: #e0f7fa;
}

.info span {
  color: #80deea;
  font-weight: bold;
  margin-right: 5px;
}

.status {
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 14px;
}

.status.pending {
  background-color: #ffb74d;
  color: black;
}

.status.processing {
  background-color: #ffeb3b;
  color: black;
}

.status.delivered {
  background-color: #81c784;
  color: black;
}

.items p {
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
}

ul {
  padding-left: 20px;
  list-style: none;
}

li {
  font-size: 14px;
  color: #f1f1f1;
  margin: 4px 0;
  display: flex;
  align-items: center;
}

li .dot {
  margin-right: 8px;
  color: #00bcd4;
}

  .card {
    width: 320px;
    background: #07182E;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    padding: 25px;
    color: white;
  }

  .card-content {
    z-index: 1;
    position: relative;
    text-align: left;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 130%;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    animation: rotateBG 3s linear infinite;
    z-index: 0;
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 5px;
    background: #07182E;
    border-radius: 15px;
    z-index: 0;
  }

  @keyframes rotateBG {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  ul {
    margin-top: 8px;
    padding-left: 20px;
    list-style: disc;
  }

  li {
    font-size: 14px;
    margin: 3px 0;
  }
`;
