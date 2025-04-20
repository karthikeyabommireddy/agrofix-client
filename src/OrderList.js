import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { supabase } from "./supabaseClient";











const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase.from("Order").select("*");
  
    if (error) {
      console.error("Error fetching orders:", error.message);
    } else {
      setOrders(data);
    }
  };
  
  const handleStatusChange = async (id, status) => {
    const { error } = await supabase
      .from("Order")
      .update({ status })
      .eq("id", id);
  
    if (error) {
      console.error("Error updating status:", error.message);
    } else {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status } : order
        )
      );
    }
  };

  const renderOrders = (status, color) => {
    const filtered = orders.filter((o) => o.status === status);
    return (
      <Section>
        <h3 style={{ color }}>{status} Orders</h3>
        <StyledTable>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Items</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order) => {
              let parsedItems = [];

              try {
                parsedItems =
                  typeof order.items === "string"
                    ? JSON.parse(order.items)
                    : order.items;
              } catch (e) {
                console.error("Error parsing order.items:", e);
              }

              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.buyer_name}</td>
                  <td>{order.contact}</td>
                  <td>{order.address}</td>
                  <td>
                    <ul style={{ paddingLeft: "15px", margin: 0 }}>
                      {parsedItems.map((item, i) => (
                        <li key={i}>
                          {item.name} × {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </Section>
    );
  };

  return (
    <Wrapper>
      <h2>Manage Orders</h2>
      {renderOrders("pending", "#e67e22")}
      {renderOrders("processing", "#f39c12")}
      {renderOrders("delivered", "#27ae60")}
    </Wrapper>
  );
};



























export default OrderList;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  padding: 20px;
  h2 {
    text-align: center;
    color: #255f38;
    margin-bottom: 20px;
  }

  select {
    padding: 6px;
    border-radius: 6px;
    font-weight: bold;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }

  select:focus {
    outline: none;
    border-color: #255f38;
  }

  li {
    font-size: 14px;
    color: #444;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 12px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', sans-serif;
  animation: ${slideIn} 0.4s ease;

  thead {
    background-color: #255f38;
    color: white;
  }

  th, td {
    padding: 12px 16px;
    vertical-align: top;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #e0f2f1;
    transition: background-color 0.3s ease;
  }
`;