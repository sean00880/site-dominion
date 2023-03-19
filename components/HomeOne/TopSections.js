import React from "react";

const TopSections = () => {
  return (
    <>
      <div className="cs-card-area" style={{"background":"none"}}>
        <div className="container">
          <div className="row justify-content-center" style={{"borderRadius":"0"}}>
          <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>1. FREE Prototype Sample After 50% Deposit</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>2. Flexible Payment Options</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>3. Full Development & Website Deployment</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-card-content">
                <h3>4. Content Writeup & Management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSections;
