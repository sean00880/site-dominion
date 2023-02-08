import React from "react";
import {FaBitcoin} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {RxCode} from "react-icons/rx"
import {RiCustomerService2Line} from "react-icons/ri"
import {MdOutlineScreenshot} from "react-icons/md"
import {CgUserlane} from "react-icons/cg"
import Pricing from '../Pricing/PricingStyleOne'



const MyExpertise = () => {
  return (
    <>
      <div className="pricing pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
          
                        <div className="about-img">
                            <img src="/images/about-img.png" alt="Image" className="homeImage"/>
                        </div>
                   
            <h2>Custom Pricing</h2>
            <hr />
            <h4>Operating a business website in the United States can cost between $10,000 - $25,000. According to various sources, setting up a business website alone costs $3,500 on average.
<br /><br />
While a lot of manpower is involved in website development, we believe website solutions should be accessible to most business owners at affordable rates.
<br /><br />
That is why, @ Site Dominion, we pledge to charge low set-up costs for fully optimized web solutions so you can allocate your budget on marketing and other business-related needs.</h4>
          </div>

          <div className="row justify-content-center">
            
            <Pricing/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
