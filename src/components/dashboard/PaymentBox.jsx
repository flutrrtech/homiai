import React from 'react';

const PaymentBox = () => {
  const handlePayment = () => {
    // Payment logic
  };

  return (
    <div className="payment-box">
      <h2>Payment Details</h2>
      <div className="payment-methods">
        <button>Credit Card</button>
        <button>PayPal</button>
      </div>
      <button onClick={handlePayment}>Complete Payment</button>
    </div>
  );
};

export default PaymentBox;