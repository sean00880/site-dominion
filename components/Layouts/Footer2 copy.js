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

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat molestiae corporis, magni maxime perferendis ducimus totam officiis sit exercitationem sed odio debitis minus cumque dolores dicta.</p>

                                    <ul className="social-icon">
                                        <li>
                                            <a aria-label="facebook" href="https://www.facebook.com/" target="_blank">
                                                <i role="none" className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="twitter" href="https://twitter.com/" target="_blank">
                                                <i role="none" className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="linkedin" href="https://www.linkedin.com/" target="_blank">
                                                <i role="none" className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="pinterest" href="https://www.pinterest.com/" target="_blank">
                                                <i role="none" className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Big Data
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    UI/UX Design
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Desktop Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Mobile Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Product Engineering
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Machine Learning
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
                                            <Link href="/about-1">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Services
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
                                            <Link href="/team">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Team
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Support
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/testimonials">
                                                <a>
                                                    <i role="none" className="right-icon bx bx-chevrons-right"></i>
                                                    Testimonials
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    
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
                            

                            <div className="col-lg-12">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a className="default-btn">All Blog Posts</a>
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