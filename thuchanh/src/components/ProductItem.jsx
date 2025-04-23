// ProductItem.jsx
import React from "react";

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr key={product.id}>
      <td className="p-2 border">{product.name}</td>
      <td className="p-2 border">{product.price.toLocaleString()}₫</td>
      <td className="p-2 border">{product.category}</td>
      <td className="p-2 border">{product.stock}</td>
      <td className="p-2 border">
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Xoá
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
