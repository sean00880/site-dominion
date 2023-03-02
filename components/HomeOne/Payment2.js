import React from "react";

import PaymentAccordion2 from "./PaymentAccordion2";



const MyExpertise = () => {
  return (
    <>
      <div className="pp-expertise-area process">
        <div className="container">
          <div style={{"background":"linear-gradient(45deg, rgb(47 94 112), rgb(51 52 57), rgb(36 95 117))"}} className="section-title style-two">
          
                        <div className="about-img">
                            <Image loading="lazy"  height={100} width={100}  src="/images/venmo-logo.png" alt="Site Dominion | Web Design Process Desktop Display" className="homeImage" />
                        </div>
                   
            <h2 style={{"color":"white"}}>for Business</h2>
            <hr style={{"color":"white"}}/>
            <h4>Site Dominion's promise is to produce and deliver websites of the highest caliber in order to provide direct value to businesses accross the globe.</h4>
          </div>

          <div className="row justify-content-center">
            <PaymentAccordion2/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
