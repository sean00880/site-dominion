import React from 'react';
import Flip from 'react-reveal/Flip';
import {FaBitcoin} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {RxCode} from "react-icons/rx"
import {RiCustomerService2Line} from "react-icons/ri"
import {MdOutlineScreenshot} from "react-icons/md"
import {IoLogoUsd} from "react-icons/io5"
import {CgUserlane} from "react-icons/cg"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';


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
                        
                          <img loading="lazy" src="/images/main-img1.png" alt="Site Dominion's homepage image." className="homeImage" data-aos="fade-down" data-aos-duration="2400" data-aos-delay="325" />
                       
                            
                        
                            <img loading="lazy" src="/images/phones.png" alt="Site Dominion | Responsive Web Design" className="homeImage2" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="550"/>
                        
                        </div>
                          
            <h2 style={{"color":"white"}}>Core Features</h2>
            <hr style={{"color":"white"}}/>
            <h4> Our team of experienced developers has worked tirelessly to create cutting-edge web solutions that cater to businesses of all sizes and industries. Our features are designed to not only enhance the functionality and aesthetics of your website, but also improve user engagement and conversion rates. From responsive design to customized integrations, we provide comprehensive web development solutions that are tailored to meet the unique needs of your business. Explore our features to discover how we can transform your online presence into a powerful marketing tool.</h4>
            
          
          </div>
       

         
         
          <div className="row justify-content-center" data-aos="fade-left" style={{"background":"none"}}>
       
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
                Site Dominion's 'Instant Quote' API and inherent on-page SEO features allow for customer acquisition with great efficiency. 
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
                Our UI/UX team creates user interfaces for mobile applications and web products that improve conversion, lower maintenance costs, and foster a unified user experience.
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
                User experience includes characteristics of branding, design, usability, and functionality in the architecture of the entire process of procuring and integrating goods and services. This enables us to promote goods and services that give customers useful and relevant insights.
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
                By incorporating usability, accessibility, and site navigation, we are able to deliver websites that not only look great but also excel in functionality.
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
                A responsive design enables your company to connect with everyone in your target market on any device, including smartphones, laptops and tablets. This helps drive traffic, generate leads and boost conversions.
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
                <IoLogoUsd className='icon'/>
                <h3>Affordable & Flexible Payment Plans</h3>
                <p>
                  We offer affordable payment options via Venmo. Explore our pricing section below and request your free quote.
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
