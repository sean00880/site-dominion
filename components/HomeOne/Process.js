import React from "react";
import {FaBitcoin} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {RxCode} from "react-icons/rx"
import {RiCustomerService2Line} from "react-icons/ri"
import {MdOutlineScreenshot} from "react-icons/md"
import {CgUserlane} from "react-icons/cg"
import HomeAccordion from "./HomeAccordion";



const MyExpertise = () => {
  return (
    <>
      <div className="pp-expertise-area pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
          
                        <div className="about-img">
                            <img src="/images/about-img.png" alt="Image" className="homeImage"/>
                        </div>
                   
            <h2>Our Process</h2>
            <hr />
            <h4>Site Dominion's promise is to produce and deliver websites of the highest caliber in order to provide direct value to businesses accross the globe.</h4>
          </div>

          <div className="row justify-content-center">
            <HomeAccordion/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
