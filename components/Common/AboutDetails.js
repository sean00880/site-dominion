import React, { Component } from 'react';
import Link from 'next/link';

class MakeYourBusiness extends Component {
    render() {
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2>Perfect UI/UX</h2>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2>Inherent SEO</h2>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2>Content Writeup + Creation</h2>
                              
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2>Fast Page Load Speeds</h2>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="business-content">
                                <h2>Transform Your Online Presence</h2>
                            </div>

                            <div className="single-business">
                                <i role="none" className="flaticon-chip"></i>
                                <h3>Connect With Your Audience & Grow Your Business</h3>
                                <p>Regardless of your industry, owning a professional website will prove to be the most imporant marketing asset for your business. By meticulously focusing on the User Interface design, User Experience, on-page and off-page SEO, functionality and performance of each of our websites, we are able to deliver websites that appeal to your audience and help them connect with you.</p>
                            </div>

                            <div className="single-business">
                                <i role="none" className="flaticon-chip"></i>
                                <h3>10X the Value for 1/10th the Price</h3>
                                <p>According to WebFX, the average business in the US can expect to spend up to $100,000 on setting up and managing a website during its lifecycle. We offer professional feature-packed websites that include inherent SEO, unique UI & UX design, outstanding page loead speeds for a one time payment of as low as $599.</p>
                            </div>

                            <div className="single-business">
                                <i role="none" className="flaticon-blockchain"></i>
                                <h3>One Stop for All Website Development Needs</h3>
                                <p>We carry out the entire process from beginning to end. Leave the development operations to our professionals and enjoy a fully catered website that transforms your online presence and connects you with potential leads locally or globally.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="/about-2">
                                    <a className="default-btn">
                                        Know Details
                                    </a>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default MakeYourBusiness;