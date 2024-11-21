import React from 'react';

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>How does it work?</h3>
          <p>Explanation of service</p>
        </div>
        <div className="faq-item">
          <h3>What services do you offer?</h3>
          <p>List of services</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;