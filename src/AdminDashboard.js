import React from "react";
import { useNavigate } from "react-router-dom";
import FancyButton from "./FancyButton"; // Make sure path is correct

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{marginBottom:'20px'}}>Admin Dashboard</h2>

      <FancyButton onClick={() => navigate("/admin/products")}>
        Manage Products
      </FancyButton>

      <br /><br />

      <FancyButton onClick={() => navigate("/admin/orders")}>
        Manage Orders
      </FancyButton>
    </div>
  );
};

export default AdminDashboard;
