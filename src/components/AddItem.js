import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [productNameInput, setProductNameInput] = useState("");
  const [productPriceInput, setProductPriceInput] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addItem(productNameInput, Number(productPriceInput));
    setProductNameInput("");
    setProductPriceInput(0);
  };

  const handleProductNameChange = (e) => {
    setProductNameInput(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPriceInput(e.target.value);
  };

  return (
    <form className="form-row my-5" onSubmit={handleFormSubmit}>
      <div className="col-md-4">
        <label htmlFor="productName" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="productName"
          name="productName"
          onChange={handleProductNameChange}
          value={productNameInput}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="productPrice" className="form-label">
          Product Price
        </label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          name="productPrice"
          onChange={handleProductPriceChange}
          value={productPriceInput}
        />
      </div>
      <div className="col-md-4">
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddItem;
