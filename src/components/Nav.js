import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_nav.scss";

const Nav = () => {
  const [activeTab, setActiveTab] = useState(1);
  const toggleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h3>Snapshot</h3>
      </div>

      <div className="navbar-container">
        <Link
          to="/"
          className={activeTab === 1 ? "nav-item nav-item-active" : "nav-item"}
          onClick={() => toggleTab(1)}
        >
          About Us
        </Link>
        <Link
          to="/our-work"
          className={activeTab === 2 ? "nav-item nav-item-active" : "nav-item"}
          onClick={() => toggleTab(2)}
        >
          Our Work
        </Link>
        <Link
          to="/contact"
          className={activeTab === 3 ? "nav-item nav-item-active" : "nav-item"}
          onClick={() => toggleTab(3)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
