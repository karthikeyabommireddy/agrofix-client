import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { supabase } from "./supabaseClient"; 

const OrderForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [form, setForm] = useState({
    buyer_name: "",
    contact: "",
    address: "",
  });
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("Product").select("*");
  
      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
    };
  
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const exists = selectedItems.find((item) => item.id === product.id);
    if (!exists) {
      setSelectedItems([
        ...selectedItems,
        { id: product.id, name: product.name, quantity: 1 },
      ]);
    }
  };

  const handleQuantityChange = (id, value) => {
    const updated = selectedItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
    );
    setSelectedItems(updated);
  };

  const handleRemoveItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = async () => {
    const items = selectedItems.map((item) => ({
      product: item.name, // ✅ match database format
      quantity: item.quantity,
    }));

    try {
      const res = await axios.post("https://backend-repo-production-44b8.up.railway.app/orders", {
        ...form,
        items,
      });
      setOrderId(res.data.id);
      setSelectedItems([]);
      setForm({ buyer_name: "", contact: "", address: "" });
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Order failed");
    }
  };

  return (
    <Wrapper>
      <h2>Place Your Bulk Order</h2>

      <div className="form-grid">
        <input
          type="text"
          placeholder="Your Name"
          value={form.buyer_name}
          onChange={(e) => setForm({ ...form, buyer_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
        <input
          type="text"
          placeholder="Delivery Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>

      <h3>Select Products</h3>
      <div className="product-list">
        {products.map((product) => (
          <button key={product.id} onClick={() => handleAddToCart(product)}>
            ➕ {product.name}
          </button>
        ))}
      </div>

      {selectedItems.length > 0 && (
        <div className="selected-items">
          <h4>🧺 Selected Items</h4>
          {selectedItems.map((item) => (
            <div className="item-row" key={item.id}>
              <span>{item.name}</span>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
              <button onClick={() => handleRemoveItem(item.id)}>❌</button>
            </div>
          ))}
        </div>
      )}

      <button className="place-btn" onClick={handlePlaceOrder}>
        🚀 Place Order
      </button>

      {orderId && (
        <p className="success-msg">
          ✅ Order placed successfully! Your Order ID:{" "}
          <strong>{orderId}</strong>
        </p>
      )}
    </Wrapper>
  );
};

export default OrderForm;

const Wrapper = styled.div`
  padding: 30px;
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Segoe UI', sans-serif;

  h2 {
    text-align: center;
    color: #255f38;
    margin-bottom: 30px;
  }

  .form-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
  }

  input {
    padding: 12px 16px;
    font-size: 15px;
    border-radius: 8px;
    border: 2px solid #ccc;
    outline: none;
  }

  input:focus {
    border-color: #58bc82;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 20px 0;
  }

  .product-list button {
    padding: 10px 14px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .product-list button:hover {
    background-color: #d9f4e3;
  }

  .selected-items {
    margin-top: 30px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
  }

  .item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 12px;
  }

  .item-row input {
    width: 60px;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .item-row button {
    background: red;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  .place-btn {
    margin-top: 20px;
    padding: 12px 24px;
    background: linear-gradient(to right, #00c853, #64dd17);
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
  }

  .place-btn:hover {
    background: linear-gradient(to right, #00e676, #76ff03);
  }

  .success-msg {
    margin-top: 20px;
    color: green;
    font-weight: bold;
    text-align: center;
  }
`;