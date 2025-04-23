import React from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Áo thun",
    price: 150000,
    category: "Thời trang",
    stock: 20,
  },
  {
    id: 2,
    name: "Laptop Dell",
    price: 15000000,
    category: "Công nghệ",
    stock: 5,
  },
  {
    id: 3,
    name: "Nồi cơm điện",
    price: 800000,
    category: "Gia dụng",
    stock: 12,
  },
];

const ProductList = () => {
  return (
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
        {sampleProducts.map((product) => (
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
  );
};

export default ProductList;
