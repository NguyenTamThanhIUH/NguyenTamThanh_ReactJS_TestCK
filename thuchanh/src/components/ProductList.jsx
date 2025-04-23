// ProductList.jsx
import React, { useState, useEffect } from "react";
import { Table, Button, Form, Row, Col, Card } from "react-bootstrap";
import ProductItem from "./ProductItem"; // Import ProductItem component

const initialProducts = [
  { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 20 },
  { id: 2, name: "Laptop Dell", price: 15000000, category: "Công nghệ", stock: 5 },
  { id: 3, name: "Nồi cơm điện", price: 800000, category: "Gia dụng", stock: 12 },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Tất cả");

  // Tải dữ liệu sản phẩm từ localStorage khi trang load
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // Lưu sản phẩm vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm");
      return;
    }

    const productToAdd = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      stock: parseInt(newProduct.stock),
    };

    setProducts([...products, productToAdd]);
    setNewProduct({ name: "", price: "", category: "", stock: "" });
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "Tất cả" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="p-4">
      {/* Tìm kiếm và lọc */}
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Form.Control
            type="text"
            placeholder="Tìm kiếm theo tên"
            value={searchTerm}
            onChange={handleSearch}
            className="shadow-sm rounded"
          />
        </Col>
        <Col md={6} className="mx-auto">
          <Form.Control as="select" value={filterCategory} onChange={handleFilterChange} className="shadow-sm rounded">
            <option value="Tất cả">Tất cả danh mục</option>
            <option value="Thời trang">Thời trang</option>
            <option value="Công nghệ">Công nghệ</option>
            <option value="Gia dụng">Gia dụng</option>
          </Form.Control>
        </Col>
      </Row>

      {/* Form Thêm sản phẩm */}
      <Row className="mb-4">
        <Col md={2} className="mx-auto">
          <Form.Control
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={newProduct.name}
            onChange={handleChange}
            className="shadow-sm rounded"
          />
        </Col>
        <Col md={2} className="mx-auto">
          <Form.Control
            type="number"
            name="price"
            placeholder="Giá"
            value={newProduct.price}
            onChange={handleChange}
            className="shadow-sm rounded"
          />
        </Col>
        <Col md={2} className="mx-auto">
          <Form.Control
            type="text"
            name="category"
            placeholder="Danh mục"
            value={newProduct.category}
            onChange={handleChange}
            className="shadow-sm rounded"
          />
        </Col>
        <Col md={2} className="mx-auto">
          <Form.Control
            type="number"
            name="stock"
            placeholder="Tồn kho"
            value={newProduct.stock}
            onChange={handleChange}
            className="shadow-sm rounded"
          />
        </Col>
        <Col md={2} className="mx-auto">
          <Button onClick={handleAddProduct} className="w-100" variant="primary" size="lg">
            Thêm sản phẩm
          </Button>
        </Col>
      </Row>

      {/* Thống kê tổng */}
      <div className="mb-4 text-center font-weight-bold text-info">
        Tổng sản phẩm: {totalProducts} | Tổng tồn kho: {totalStock}
      </div>

      {/* Bảng sản phẩm */}
      <Card className="shadow-sm">
        <Card.Body>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-primary text-center">
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Danh mục</th>
                <th>Tồn kho</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onDelete={handleDeleteProduct}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductList;
