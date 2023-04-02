import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <section className="flex flex-col items-center justify-center gap-y-4">
      <h1>Product Detail</h1>
      <p>{productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </section>
  );
};

export default ProductDetail;
