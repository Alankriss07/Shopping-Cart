import React from "react";
import Product from "./Product.js";

export default function ProductList({
  productList,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) {
  const hasProducts = productList.length > 0;

  return (
    <>
      {hasProducts ? (
        productList.map((product, index) => (
          <Product
            product={product}
            key={index}
            incrementQuantity={incrementQuantity}
            index={index}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          />
        ))
      ) : (
        <h1>No Products Exist in the Cart</h1>
      )}
    </>
  );
}
