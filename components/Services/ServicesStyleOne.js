import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container">
                <Tabs>
              <TabList>
                <Tab>Website</Tab>
                <Tab>Photography</Tab>
                <Tab>Other</Tab>
              </TabList>
              <div className="row">
              <TabPanel>
                <div className="row">
              <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-technical-support"></i>
                                <h3>Safe Security</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-shield"></i>
                                <h3>Technical Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-success"></i>
                                <h3>Live Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
              </TabPanel>
              </div>
              <TabPanel>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-cloud-computing-1"></i>
                                <h3>Data Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-engineer"></i>
                                <h3>Data Engineer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-success"></i>
                                <h3>Facing AI Challenges</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-machine-learning"></i>
                                <h3>Heavy Industry</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i role="none" className="flaticon-artificial-intelligence"></i>
                                <h3>Transportation</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-features">
                                <i role="none" className="flaticon-health"></i>
                                <h3>Health Care</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>


                    </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;