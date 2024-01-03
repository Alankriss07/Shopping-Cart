import React from "react";

const Product = ({
  product,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  index,
}) => {
  const { name, price, quantity } = product;
  const totalPrice = quantity * price;

  const handleQuantityChange = (action) => {
    if (action === "decrement") {
      decrementQuantity(index);
    } else {
      incrementQuantity(index);
    }
  };

  const handleRemove = () => {
    removeItem(index);
  };

  return (
    <div className="product-row mt-3">
      <div className="product-details col-5">
        <h2>
          {name}
          <span className="badge bg-secondary">₹{price}</span>
        </h2>
      </div>
      <div className="quantity-control col-3">
        <div className="btn-group" role="group" aria-label="Quantity control">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange("decrement")}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange("increment")}
          >
            +
          </button>
        </div>
      </div>
      <div className="total-price col-2">{totalPrice}</div>
      <button className="remove-btn col-2" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default Product;
