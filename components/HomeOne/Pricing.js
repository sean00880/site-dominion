import React from "react";
import {FaBitcoin} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {RxCode} from "react-icons/rx"
import {RiCustomerService2Line} from "react-icons/ri"
import {MdOutlineScreenshot} from "react-icons/md"
import {CgUserlane} from "react-icons/cg"
import Pricing from '../Pricing/PricingStyleTwo'



const MyExpertise = () => {
  return (
    <>
      <div className="pricing">
        <div className="container">
          <div className="section-title style-two">
          
                       
                   
            <h2>Custom Pricing</h2>
            <hr />
            <h4>Operating a business website in the United States can cost between $10,000 - $25,000. According to various sources, setting up a business website alone costs $3,500 on average.
<br /><br />
While a lot of manpower is involved in website development, we believe website solutions should be accessible to most business owners at affordable rates.
<br /><br />
That is why, @ Site Dominion, we pledge to charge low set-up costs for fully optimized web solutions so you can allocate your budget on marketing and other business-related needs.</h4>
<div className="about-img">
                            <img src="/images/price2.png" alt="Image" className="homeImage" data-aos="fade-up" />
                            <img src="/images/price2.svg" alt="Image" className="homeImage2" data-aos="fade-right" data-aos-delay="150"/>
                        </div>
          </div>

          <div className="row justify-content-center" style={{"width":"100%"}} data-aos="fade-left"  data-aos-duration="1200" >
            
            <Pricing/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
