import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductListCard from "./ProductListCard";
import styled from "styled-components";
import { supabase } from './supabaseClient';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('Product').select('*');
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };
  
    fetchProducts();
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