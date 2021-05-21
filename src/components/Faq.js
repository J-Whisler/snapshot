import React, { useState } from "react";

import "../styles/_faq.scss";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="questions">
        <div
          className={
            activeTab === 1
              ? "question-item question-item-active"
              : "question-item"
          }
          onClick={() => toggleTab(1)}
        >
          <div className="question">
            <h3>How do I set up a photo or video shoot?</h3>
          </div>
          <div className="answer">
            <h4>Photo/video shoots</h4>
            <p>
              Visit our contact page to send us an email with a few details
              about what you are looking for and we will contact you back within
              24 hours to discuss the next steps!
            </p>
          </div>
        </div>
        <div
          className={
            activeTab === 2
              ? "question-item question-item-active"
              : "question-item"
          }
          onClick={() => toggleTab(2)}
        >
          <div className="question">
            <h3>What kind of events do you guys cover?</h3>
          </div>
          <div className="answer">
            <h4>Events</h4>
            <p>
              We can do almost anything! Weddings, graduations, live sporting or
              musical events and much, much more! View our work to see more
              about what we do!
            </p>
          </div>
        </div>
        <div
          className={
            activeTab === 3
              ? "question-item question-item-active"
              : "question-item"
          }
          onClick={() => toggleTab(3)}
        >
          <div className="question">
            <h3>Payments and Packages</h3>
          </div>
          <div className="answer">
            <h4>Payments/packages</h4>
            <p>
              We offer a variety of photo/video packages based off of customer
              needs and different payment methods based on the desired package.
              Contact us so we can discuss your photo/video needs!
            </p>
          </div>
        </div>
        <div
          className={
            activeTab === 4
              ? "question-item question-item-active"
              : "question-item"
          }
          onClick={() => toggleTab(4)}
        >
          <div className="question">
            <h3>Why use us for your photo/video needs?</h3>
          </div>
          <div className="answer">
            <h4>Customer Service</h4>
            <p>
              We pride ourselves on providing exactly what each individual
              customer wants. We want to make sure you are getting exactly what
              you want. View our work to see real photos and videos that we have
              provided for past customers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
