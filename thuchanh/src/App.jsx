// App.jsx
import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList"; // Import ProductList component

function App() {
  return (
    <Container className="p-4">
      <h1 className="text-center mb-4 text-primary" style={{ fontSize: '36px', fontWeight: 'bold' }}>Danh sách sản phẩm</h1>
      <ProductList />
    </Container>
  );
}

export default App;
