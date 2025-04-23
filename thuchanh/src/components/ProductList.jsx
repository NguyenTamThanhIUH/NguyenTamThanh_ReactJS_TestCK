import React, { useState } from "react";

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

  return (
    <div>
      {/* Form Thêm sản phẩm */}
      <div className="mb-4 grid grid-cols-5 gap-2">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={newProduct.price}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Danh mục"
          value={newProduct.category}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="number"
          name="stock"
          placeholder="Tồn kho"
          value={newProduct.stock}
          onChange={handleChange}
          className="border p-2"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600"
        >
          Thêm sản phẩm
        </button>
      </div>

      {/* Bảng sản phẩm */}
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Tên sản phẩm</th>
            <th className="p-2 border">Giá</th>
            <th className="p-2 border">Danh mục</th>
            <th className="p-2 border">Tồn kho</th>
            <th className="p-2 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.price.toLocaleString()}₫</td>
              <td className="p-2 border">{product.category}</td>
              <td className="p-2 border">{product.stock}</td>
              <td className="p-2 border">
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
