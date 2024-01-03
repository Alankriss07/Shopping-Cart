import React from "react";

const Footer = ({ resetQuantity, totalAmount }) => {
  const handleReset = () => resetQuantity();

  return (
    <footer className="footer">
      <div className="footer-row">
        <button className="footer-btn btn btn-danger" onClick={handleReset}>
          Reset
        </button>
        <div className="footer-total bg-dark text-white">
          <span>Total Amount:</span> {totalAmount}
        </div>
        <button className="footer-btn btn btn-primary">Pay Now</button>
      </div>
    </footer>
  );
};

export default Footer;
