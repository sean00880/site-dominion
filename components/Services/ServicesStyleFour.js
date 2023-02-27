import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleFour extends Component {
    render() {
        return (
            <section className="industries-serve-area">
                <div className="container">
                    <div className="section-title">
                        <h2>Industries We Serve</h2>
                        <hr />
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni fugit, quod iure quibusdam, omnis nisi cum, nostrum nulla deleniti mollitia tenetur.</h4>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none" className="flaticon-machine-learning"></i>
                                        <h3>Heavy Industry</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" >Learn More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none" className="flaticon-artificial-intelligence"></i>
                                        <h3>Transportation</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" >Learn More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none" className="flaticon-health"></i>
                                        <h3>Health Care</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" >Learn More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none" className="flaticon-automation"></i>
                                        <h3>Manufacturing</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation">Learn More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="industries-img" data-aos="zoom-in-up">
                                <img src="/images/industry.webp" alt="Industry image." />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none" className="flaticon-choice"></i>
                                        <h3>Logistic</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation">Learn More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none" className="flaticon-deep-learning"></i>
                                        <h3>Real Estate</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" ></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none" className="flaticon-cyber-security"></i>
                                        <h3>Banking</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" >Learn More</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none" className="flaticon-blockchain"></i>
                                        <h3>Automobile</h3>
                                        <span>All kind of industry</span>

                                        <Link href="/service-details">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" >Learn More</span>
                                            </a>
                                        </Link>
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

export default ServicesStyleFour;