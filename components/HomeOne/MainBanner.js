import React from 'react';
import Link from 'next/link';
import KeenSlider from './KeenSlider';

const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-one">
            <div className="container-fluid">
                <div className="row text-center justify-center flex flex-column-reverse text-align-center align-items-center">
                    <div className="wrapper" style={{"display":"flex", "alignItems":"center"}}>
                    
                        <div className="banner-text">
                        <img className="bannerImage" src="/images/home-one/main-img1.png" alt="Site Dominion's banner image." />
                            
                            
                            <h2>Website Design, Deployment, SEO & More.</h2>
                           <h3>Professional Websites Optimized For Lead Generation <p>Business transactions processed via VENMO.</p>
                           <div className="banner-btn">
                                <Link href="/getting-started">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contact Us
                                    </a>
                                </Link>
                            </div></h3>
                           
                            
                        </div>
                    </div>

                    
                </div>
            </div> 

           
        </section>
    )
}

export default MainBanner;