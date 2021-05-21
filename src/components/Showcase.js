import React from "react";

import "../styles/_showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div className="showcase-left"></div>
      <div className="showcase-right">
        <div className="showcase-right-content">
          <h2>
            Providing high quality photography and videography services to the
            Cleveland area since 2016.
          </h2>
          <div className="grid">
            <div className="grid-item">
              <div className="grid-item-top">
                <i className="fas fa-camera"></i>
                <h5>Photos</h5>
              </div>
              <div className="grid-item-bottom">
                <p>A wide selection of photo options</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item-top">
                <i className="fas fa-video"></i>
                <h5>Videos</h5>
              </div>
              <div className="grid-item-bottom">
                <p>3 different video style options</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item-top">
                <i className="fas fa-edit"></i>
                <h5>Editing</h5>
              </div>
              <div className="grid-item-bottom">
                <p>Profession photo and video editing</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item-top">
                <i className="fas fa-shopping-cart"></i>
                <h5>Packages</h5>
              </div>
              <div className="grid-item-bottom">
                <p>Several different photo/video packages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
