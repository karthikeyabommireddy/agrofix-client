// client/src/AboutPage.js
import React from "react";
import './AboutPage.css'; // Import the CSS file for styling
import Card from "./AboutpageCard"; // Import the card component
const AboutPage = () => (
  <div className="main">
    <h1>Agrofix</h1>
    <p style={{ fontSize: "24px", color: "lightgray" }}>
        Welcome to <strong>Agrofix</strong> – where freshness meets trust. <br />
        We help you order high-quality fruits and vegetables in bulk with ease. <br />
        Our mission is to support farmers and deliver healthy produce straight to your doorstep.
    </p>

    <div className="card-section">
        <Card>{"High Quality Products"}</Card>
        <Card>{"Affordable Prices"}</Card>
        <Card>{"Sustainable Practices"}</Card>
    </div>
    <div className="card-section">
        <Card>{"Secure Transactions"}</Card>
        <Card>{"Customer Satisfaction"}</Card>
        <Card>{"Fast Delivery"}</Card>
    </div>
    

  </div>
);

export default AboutPage;