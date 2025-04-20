import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">🥦 Agrofix</Link>
      </div>

      <div className="navbar-right">
        <Link to="/">About</Link>
        <Link to="/products">Products</Link>

        {!isAdmin ? (
          <>
            <Link to="/order-tracking">Order Tracking</Link>
            <Link to="/orders">Place Order</Link>
            <Link to="/admin-login">Admin Login</Link>
          </>
        ) : (
          <>
            <Link to="/admin/products">Product Manage</Link>
            <Link to="/admin/orders">Manage Orders</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;