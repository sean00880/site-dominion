import React from 'react';
import Link from 'next/link';
import KeenSlider from './KeenSlider';
import Image from 'next/image'; 
import Blog from './Blog2';

export const config = { unstable_runtimeJS: false }

const MainBanner = () => {
    return (
        <>
        <div style={{"display":"flex","flexDirection":"row"}}>
        <section className="main-banner-area main-banner-area-one">
            <div className="container-fluid">
                <div className="row text-center justify-center flex flex-column-reverse text-align-center align-items-center">
                    <div className="wrapper" style={{"display":"flex", "alignItems":"center","padding":"0"}}>
                    
                        <div className="banner-text">
                        <img priority className="bannerImage2" src="/images/mockup.png" alt="Site Dominion's banner image." />
                        <img priority className="bannerImage" src="/images/banner3.png" alt="Site Dominion's banner image." />
                      
                            
                            
                            <h2>Website Design, Deployment, SEO & More.</h2>
                           <h3>Empower your digital presence with an exceptional web development agency. Unleash the power of innovation, creativity, and expertise to craft a website that exceeds your expectations. Let us elevate your online presence to new heights with our exceptional web development services.</h3><p><Link href="/payment" passHref><Image priority  height="30px" width="30px" src="/images/i2.png" style={{"cursor":"pointer"}} alt="Site Dominion's Payment info." /></Link>Business transactions processed via VENMO.</p>
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
                            </div>
                           
                            
                        </div>
                    </div>

                    
                </div>
            </div> 

           
        </section>
        </div>
        </>
    )
}

export default MainBanner;