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
            <section className="pricing-area" style={{"width":"100%"}} id="payment">
                <div className="container" style={{"width":"100%"}}>
                    

                    <div className="tab quote-list-tab" style={{"width":"100%"}}>
                        {/* Tabs */}
                        <ul className="tabs">
                             <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                <span role="button" tabIndex={1}>One-Time</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span role="button" tabIndex={2}>Monthly</span>
                            </li>
                        </ul>

                        <div className="tab_content" style={{"width":"100%"}}>
                            <div id="tab1" className="tabs_item" style={{"width":"100%"}}>
                                <div className="row" style={{"borderRadius":"1vh","background":"none"}}>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-card single-pricing1" data-aos="fade-left"  data-aos-delay="100">
                                            <div className="pricing-top-heading">
                                                <h3>Basic</h3>
                                                <p>Personal Website Design + Deployment</p>
                                            </div>
                                            <span>$399<sub>.99</sub></span>

                                            <ul>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Website Design [Personal Use]
                                                </li>   
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            
                                                <a className="default-btn" href="https://buy.stripe.com/7sI4h70IKdKz6zK28c">
                                                    Choose Package
                                                </a>
                                            
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-card single-pricing2" data-aos="fade-up"  data-aos-delay="150" >
                                            <div className="pricing-top-heading">
                                                <h3>Premium</h3>
                                                <p>Professional Website Design + Setup</p>
                                            </div>
                                            <span>$699<sub>.99</sub></span>

                                            <ul>
                                            <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Website Design [Professional]
                                                </li>   
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            
                                                <a className="default-btn" href="https://buy.stripe.com/5kAfZPezA9ujf6gcMR">
                                                    Choose Package
                                                </a>
                                            

                                            <strong className="popular" role="heading">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 offset-lg-0">
                                        <div className="pricing-card long" data-aos="fade-right"  data-aos-delay="100" >
                                            <div className="pricing-top-heading">
                                                <h3>Elite</h3>
                                                <p>Industrial Website Design + Setup</p>
                                            </div>
                                            <span>$899<sub>.99</sub></span>

                                            <ul>
                                            <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Website Design [Industry]
                                                </li>   
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            
                                                <a className="default-btn" href="https://buy.stripe.com/4gwbJz4Z0eOD2ju8wC">
                                                    Choose Package
                                                </a>
                                            
                                        </div>
                                    </div>

                                    
                                </div>
                                <div className="pricing-button" style={{"justifyContent":"center","alignContent":"center"}}>
                                Browse through our list of servies and get started with your project:
                                <Link href="/services">
                                <a className="default-btn btn2" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                                    Explore Services
                                </a>
                            </Link> 
                            </div>
                            </div>

                            <div id="tab2" className="tabs_item" style={{"width":"100%"}}>
                                <div className="row" style={{"borderRadius":"1vh"}}>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-card single-pricing1" data-aos="fade-left"  data-aos-delay="100">
                                            <div className="pricing-top-heading">
                                                <h3>Basic</h3>
                                                <p>Personal Website Design + Deployment</p>
                                            </div>
                                            <span>$49.99</span>

                                            <ul>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Website Design [Personal Use]
                                                </li>   
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            
                                                <a className="default-btn" href="https://buy.stripe.com/cN200RajkdKz4rC8wx">
                                                    Choose Package
                                                </a>
                                            
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-card single-pricing2" data-aos="fade-up"  data-aos-delay="150" >
                                            <div className="pricing-top-heading">
                                                <h3>Premium</h3>
                                                <p>Professional Website Design + Setup</p>
                                            </div>
                                            <span>$69.99</span>

                                            <ul>
                                            <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Website Design [Professional]
                                                </li>   
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-x'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            
                                                <a className="default-btn" href="https://buy.stripe.com/aEUcNDcrsbCre2ccMO">
                                                    Choose Package
                                                </a>
                                            

                                            <strong className="popular" role="heading">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 offset-lg-0">
                                        <div className="pricing-card long" data-aos="fade-right"  data-aos-delay="100" >
                                            <div className="pricing-top-heading">
                                                <h3>Elite</h3>
                                                <p>Industrial Website Design + Setup</p>
                                            </div>
                                            <span>$89.99</span>

                                            <ul>
                                            <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Website Design [Industry]
                                                </li>   
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Deployment [Domain + Hosting]
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    On-page SEO
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Multiple Revisions
                                                </li>
                                            
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Lead Generation API
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Blog
                                                </li>
                                                <li>
                                                    <i role="none" className='bx bx-check'></i>
                                                    Unlimited Pages
                                                </li>
                                            </ul>

                                            
                                                <a className="default-btn" href="https://buy.stripe.com/aEU00Rdvw5e37DO5kn">
                                                    Choose Package
                                                </a>
                                            
                                        </div>
                                    </div>

                                    
                                </div>
                                <div className="pricing-button" style={{"justifyContent":"center","alignContent":"center"}}>
                                Browse through our list of servies and get started with your project:
                                <Link href="/services">
                                <a className="default-btn btn2" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                                    Explore Services
                                </a>
                            </Link> 
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