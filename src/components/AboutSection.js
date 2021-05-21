import React from "react";
// import { Link } from "react-router-dom";
import "../styles/_about-section.scss";
// import { toggleTab } from "./Nav";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-left">
        <h2>
          Photography and <span>Videography</span>
        </h2>
        <p>Contact us to see how we could meet your needs!</p>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
      <div className="about-section-right"></div>
    </div>
  );
};

export default AboutSection;
