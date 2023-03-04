import React from "react";

import PaymentAccordion from "./PaymentAccordion";



const MyExpertise = () => {
  return (
    <>
      <div className="pp-expertise-area process" id="payment">
        <div className="container">
          <div style={{"background":"linear-gradient(45deg, rgb(47 94 112), rgb(51 52 57), rgb(36 95 117))"}} className="section-title style-two">
          <div className="faq-img" data-aos="zoom-in">
                                <img loading="lazy"  src="/images/qr.png" alt="Site Dominion's home-accordion image."  />
                            </div>
                        <div className="about-img">
                            <img loading="lazy"  src="/images/venmo-logo.png" alt="Site Dominion | Web Design Process Desktop Display" className="homeImage" />
                        </div>
                   
            <h2 style={{"color":"white"}}>for Business</h2>
            <hr style={{"color":"white"}}/>
            
          </div>

          <div className="row justify-content-center">
            <PaymentAccordion/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
