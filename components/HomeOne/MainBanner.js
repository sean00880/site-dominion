import React from 'react';
import Link from 'next/link';
import KeenSlider from './KeenSlider';

const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-one">
            <div className="container-fluid">
                <div className="row text-center justify-center flex flex-column-reverse text-align-center align-items-center">
                    <div className="wrapper" style={{"display":"flex", "alignItems":"center"}}>
                    <img className="bannerImage" src="/images/home-one/main-img1.png" alt="Image" />
                        <div className="banner-text">
                            
                            <h1>High Converting Websites for All Businesses | Design, Deployment, SEO & More.</h1>
                           <hr />
                           <h3>We offer all-in-1 solutions for Website design, development, hosting, deployment, SEO & more.</h3>
                           <p style={{"color":"green"}}>Cashapp & Venmo</p>
                            <div className="banner-btn">
                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contact Us
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* Main Image */}

                        {/* Banner Shape Images */}
                        <div className="banner-img">
                            <img 
                                className="animate__animated animate__fadeInUp animate__fast" 
                                src="/images/home-one/shape1.png" 
                                alt="Image" 
                            />
                            <img 
                                className="animate__animated animate__fadeInUp animate__fast" 
                                src="/images/home-one/shape2.png" 
                                alt="Image" 
                            /> 
                            <img 
                                className="animate__animated animate__fadeInRight animate__fast" 
                                src="/images/home-one/shape3.png" 
                                alt="Image" 
                            />
                            <img 
                                className="animate__animated animate__fadeInRight animate__fast" 
                                src="/images/home-one/shape4.png" 
                                alt="Image" 
                            />
                        </div>
                    </div>
                </div>
            </div> 

            {/* Shape Images */}
            <div className="over-shape">
                <img src="/images/home-one/shape/animate1.png" alt="Image" />
                <img src="/images/home-one/shape/animate2.png" alt="Image" />
                <img src="/images/home-one/shape/animate3.png" alt="Image" />
            </div>

            <div className="white-shape">
                <img src="/images/home-one/bottom-shape.png" alt="Image" />
            </div>
        </section>
    )
}

export default MainBanner;