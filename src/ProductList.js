import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductListCard from "./ProductListCard";
import styled from "styled-components";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-repo-production-44b8.up.railway.app/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  

  const handleAddToCart = (product) => {
    alert(`"${product.name}" added to cart!`);
  };

  const vegetables = products.filter((p) => p.category === "Vegetable");
  const fruits = products.filter((p) => p.category === "Fruit");

  return (
    <Wrapper>
      <h2>Our Fresh Products</h2>

      {/* 🥦 VEGETABLES */}
      {vegetables.length > 0 && <h3>Vegetables</h3>}
      <div className="card-grid">
        {vegetables.map((product) => (
          <ProductListCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* 🍎 FRUITS */}
      {fruits.length > 0 && <h3 style={{ marginTop: "30px" }}>Fruits</h3>}
      <div className="card-grid">
        {fruits.map((product) => (
          <ProductListCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* 😕 If no products */}
      {vegetables.length === 0 && fruits.length === 0 && (
        <p>No products available.</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;

  h2 {
    text-align: center;
    color: #255f38;
  }

  h3 {
    margin-top: 20px;
    color: #255f38;
  }

  .card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export default ProductList;