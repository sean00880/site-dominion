import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class ServicesStyleOne extends Component {
    render() {
        return (
            <div className="features-area features-area-inner-style">
                <div className="container">
                <Tabs>
              <TabList>
                <Tab>Featured</Tab>
                <Tab>Websites</Tab>
                <Tab>Other</Tab>
              </TabList>
              <div className="row">
              <TabPanel>
                
              <div className="col-lg-12 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Site Dominion Premium Website </h3>
                                <p>Go with our featured service and get the best web development service you could ask for.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <h3>INCLUDED WITH OUR PREMIUM WEBSITE:</h3>
              <div className="wrapper">
            
                        
                       
                       
                       <div className="col-lg-4 p-0 column">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>1) Design + Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                               
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>2) Full Deployment [Hosting & Domain]</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                               
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>3) Project Optimization</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                
                            </div>
                        </div>

                        
                       
                        </div>
                        
              </TabPanel>
              </div>
              <TabPanel>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Social Media Page Setup</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Landing Page</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Ad Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-machine-learning"></i>
                                <h3>Blog Setup</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-artificial-intelligence"></i>
                                <h3>Website Design [Design Only]</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-features">
                                <i className="flaticon-health"></i>
                                <h3>Website Content Management</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>


                    </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default ServicesStyleOne;