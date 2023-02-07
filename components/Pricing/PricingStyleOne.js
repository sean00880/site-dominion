import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleOne extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="pricing-area pt-100 pb-70">
                <div className="container">
                    

                    <div className="tab quote-list-tab">
                        {/* Tabs */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>One-Time</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>Monthly</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing single-pricing1">
                                            <div className="pricing-top-heading">
                                                <h3>Basic</h3>
                                                <p>Simple Website Design + Deployment</p>
                                            </div>
                                            <span>$299</span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Website Design [Basic]
                                                </li>   
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing single-pricing2">
                                            <div className="pricing-top-heading">
                                                <h3>Premium</h3>
                                                <p>Build A Website</p>
                                            </div>
                                            <span>$499</span>

                                            <ul>
                                            <li>
                                                    <i className='bx bx-check'></i>
                                                    Website Design [Industry Standard]
                                                </li>   
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Elite</h3>
                                                <p>Build A Website</p>
                                            </div>
                                            <span>$699</span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Basic</h3>
                                                <p>Build A Website</p>
                                            </div>
                                            <span>$39<sub>/y</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Standard</h3>
                                                <p>Build A Website</p>
                                            </div>
                                            <span>$79<sub>/y</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Premium</h3>
                                                <p>Build A Website</p>
                                            </div>
                                            <span>$99<sub>/y</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingStyleOne;