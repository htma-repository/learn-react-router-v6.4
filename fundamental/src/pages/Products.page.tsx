import React from "react";
import { Link } from "react-router-dom";

const productsList = [
  {
    id: "p1",
    name: "Products 1",
  },
  {
    id: "p2",
    name: "Products 2",
  },
  {
    id: "p3",
    name: "Products 3",
  },
];

const Products = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4">
      <h1>Products</h1>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
