import React from 'react';

const PricingBox = () => {
  return (
    <section className="pricing-section">
      <h2>Our Pricing</h2>
      <div className="pricing-options">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Basic Content</li>
            <li>Limited Services</li>
          </ul>
          <button>Choose Basic</button>
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Advanced Content</li>
            <li>Full Services</li>
          </ul>
          <button>Choose Pro</button>
        </div>
      </div>
    </section>
  );
};

export default PricingBox;