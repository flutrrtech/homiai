import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;