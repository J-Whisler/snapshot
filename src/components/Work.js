// import react from "react";

import "../styles/_work.scss";

const Work = () => {
  return (
    <div className="work-container">
      <div className="left-sidebar">
        <div className="work-icons">
          <i className="fas fa-images"></i>
          <i className="fas fa-video"></i>
        </div>
      </div>
      <div className="main-content">
        <div className="photo-container"></div>
        <div className="video-container"></div>
      </div>
      <div className="right-sidebar">
        <div className="tabs">
          <div className="tab-item tab-item-active">
            <h4>Photos</h4>
          </div>
          <div className="tab-item">
            <h4>Videos</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
