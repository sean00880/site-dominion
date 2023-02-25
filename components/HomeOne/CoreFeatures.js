import React from 'react';
import Flip from 'react-reveal/Flip';
import {FaBitcoin} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {RxCode} from "react-icons/rx"
import {RiCustomerService2Line} from "react-icons/ri"
import {MdOutlineScreenshot} from "react-icons/md"
import {CgUserlane} from "react-icons/cg"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import AOS from "aos";
import "aos/dist/aos.css";


const MyExpertise = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="pp-expertise-area">
        <div className="container">
       
          <div className="section-title style-two">
          
                        <div className="about-img"  >
                        
                          <img src="/images/main-img1.png" alt="Image" className="homeImage" data-aos="fade-down" data-aos-duration="2400" data-aos-delay="325" />
                       
                            
                        
                            <img src="/images/phones.png" alt="Image" className="homeImage2" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="550"/>
                        
                        </div>
                          
            <h2>Core Features</h2>
            <hr style={{"color":"white"}}/>
            <h4>Site Dominion's promise is to produce and deliver websites of the highest caliber in order to provide direct value to businesses accross the globe.</h4>
          
          </div>
       

         
         
          <div className="row justify-content-center" data-aos="fade-left">
       
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <FaBitcoin className="icon"/>
                <h3>Prioritization on Conversions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <CgWebsite className="icon"/>
                <h3>Advanced Functionality</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <MdDesignServices className="icon"/>
                <h3>Impactful Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <CgUserlane className='icon'/>
                <h3>Luxurious User Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <RxCode className="icon"/>
                <h3>Best Programming Practices Followed</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <RiCustomerService2Line  className="icon"/>
                <h3>Flexible Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="pp-expertise-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <MdOutlineScreenshot className='icon'/>
                <h3>Responsive on All Devices</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
