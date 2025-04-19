import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage"; // products
import PlaceOrderPage from "./PlaceOrderPage"; // orders
import OrderTrackingPage from "./OrderTrackingPage";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ProductManager from "./ProductManager";
import OrderList from "./OrderList";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css"; // Assuming you have a CSS file for styling
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/orders" element={<PlaceOrderPage />} />
        <Route path="/order-tracking" element={<OrderTrackingPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 🔐 Protected admin routes */}
        <Route path="/admin" element={
          <ProtectedRoute><AdminDashboard /></ProtectedRoute>
        } />
        <Route path="/admin/products" element={
          <ProtectedRoute><ProductManager /></ProtectedRoute>
        } />
        <Route path="/admin/orders" element={
          <ProtectedRoute><OrderList /></ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
