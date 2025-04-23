// ProductItem.jsx
import React from "react";
import { Button } from "react-bootstrap";

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price.toLocaleString()}₫</td>
      <td>{product.category}</td>
      <td>{product.stock}</td>
      <td className="text-center">
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(product.id)}
          className="text-nowrap"
        >
          Xoá
        </Button>
      </td>
    </tr>
  );
};

export default ProductItem;
