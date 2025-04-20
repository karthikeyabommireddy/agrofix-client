import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { supabase } from "./supabaseClient";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);



// ✅ Fetch all products
const fetchProducts = async () => {
  const { data, error } = await supabase.from("Product").select("*");
  if (error) {
    console.error("Fetch error:", error.message);
  } else {
    setProducts(data);
  }
};

// ✅ Add or Update product
const handleAddOrUpdate = async () => {
  try {
    if (form.id) {
      const { error } = await supabase
        .from("Product")
        .update({
          name: form.name,
          price: parseFloat(form.price),
          category: form.category,
        })
        .eq("id", form.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from("Product").insert([
        {
          name: form.name,
          price: parseFloat(form.price),
          category: form.category,
        },
      ]);
      if (error) throw error;
    }

    setForm({ id: null, name: "", price: "", category: "" });
    fetchProducts();
  } catch (err) {
    console.error("Save error:", err.message || err);
  }
};

// ✅ Delete product
const handleDelete = async (id) => {
  const { error } = await supabase.from("Product").delete().eq("id", id);
  if (error) {
    console.error("Delete error:", error.message);
  } else {
    fetchProducts();
  }
};

  

  const handleEditClick = (product) => {
    setForm({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    });
  };

  return (
    <Wrapper>
      <h2>Admin – Product Manager</h2>

      <Form>
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
        </select>
        <SubmitButton onClick={handleAddOrUpdate}>
          {form.id ? "Update" : "Add"}
        </SubmitButton>
      </Form>

      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.category}</td>
              <td>
                <ActionButton onClick={() => handleEditClick(prod)}>Edit</ActionButton>
                <ActionButton danger onClick={() => handleDelete(prod.id)}>Delete</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default ProductManager;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  padding: 20px;
  h2 {
    text-align: center;
    color: #255f38;
    margin-bottom: 20px;
  }
`;

const Form = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  input, select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  background-color: #255f38;
  color: white;
  font-weight: bold;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1d4d2c;
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
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #e0f2f1;
    transition: background-color 0.3s ease;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => (props.danger ? "#fff" : "#255f38")};
  background-color: ${(props) => (props.danger ? "#e53935" : "#ffd700")};

  &:hover {
    background-color: ${(props) => (props.danger ? "#c62828" : "#f6c900")};
  }
`;