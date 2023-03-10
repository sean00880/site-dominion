import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <a href="/" className="logo">
                                        <img loading="lazy"   src="/images/lion4.png" alt="Site Dominion | Footer Logo" />
                                    </a>

                                    <p>Site Dominion is a top-notch web development website dedicated to creating stunning and functional websites for businesses and individuals. Our team of experienced developers and designers are passionate about delivering exceptional web solutions tailored to meet the unique needs of each of our clients</p>
                                    
                                <div style={{"display":"flex","flexDirection":"row"}}>
                                <div class="social-container" >
                                   <div style={{"display":"flex","flexDirection":"column"}}>
                                    <a href="https://www.facebook.com/sitedominion"
                                        className="facebook social">
                                        <img width={25} height={25} src="/images/fb.png" style={{"position":"relative","top":"0"}}/>
                                    </a>
                                    <a href="https://www.twitter.com/sitedominion"
                                        className="twitter social">
                                        <img width={25} height={25} src="/images/twitter.png" style={{"position":"relative","top":"0"}}/>
                                    </a>
                                    </div>
                                    
                                    <div style={{"display":"flex","flexDirection":"column"}}>
                                    <a href="https://sitedominion.medium.com/"
                                        className="medium social">
                                        <img width={25} height={25} src="/images/medium.png" style={{"position":"relative","top":"0"}}/>
                                    </a>
                                    <a href="https://www.facebook.com/sitedominionofficial"
                                        className="instagram social">
                                        <img width={25} height={25} src="/images/ig.png" style={{"position":"relative","top":"0"}}/>
                                        
                                    </a>

                                    </div>
                                    
                                </div>

                               <a href="https://g.page/r/Cb1Ep_G4Wk8KEAI/review">
                                <img loading="lazy" src="/images/reviews.png" className="google" alt="Site Dominion| Google Reviews" style={{"position":"relative","top":"-1vh","maxWidth":"unset","transform":"scale(.6)"}}/>
                                </a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/premium-website-package">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Premium Website Package
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/website-design-and-development">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Website Design & Development
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/website-deployment">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Website Deployment
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-creation">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                   Blog Creation & Setup
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/logo-design">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Logo Design
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/website-optimization">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Website Optimization
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/website-content-writing">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Website Content Writing
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Important Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/process">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Process
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Pricing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/getting-started/#features">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Core Features
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/getting-started/#why-us">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    What's Included?
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/industries-we-serve/">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Industries We Serve
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Portfolio
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Information</h3>

                                    <ul className="information">
                                        <li role="none" className="address">
                                            <i role="none" className="flaticon-call"></i>
                                            <span role="heading" aria-level="1">Phone</span>
                                            +1(571)599-4889
                                        </li>

                                        <li role="none" className="address">
                                            <i role="none" className="flaticon-envelope"></i>
                                            <span role="heading" aria-level="2">Email</span>
                                            service@sitedominion.com
                                        </li>

                                        <li role="none" className="address">
                                            <i role="none" className="flaticon-maps-and-flags"></i>
                                            <span role="heading" aria-level="3">Address</span>
                                            Ashburn, VA, USA
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-shape">
                        <img loading="lazy"   src="/images/shape/footer-shape-one.png" alt="Image" />
                        <img loading="lazy"   src="/images/shape/footer-shape-two.png" alt="Image" />
                    </div>
                </footer>
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>Copyright &copy; {currentYear} Site Dominion. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/coming-soon">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;