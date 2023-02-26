import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area">
                <div className="container2">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>What's included in our featured website package?</h2>
                        <hr />
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi rem quo itaque minus dolorem ratione vero, quisquam reiciendis quia atque eos aspernatur.</h4>
                    </div>

                    <div className="row align-items-center" style={{"borderRadius":"1vh"}}>
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li data-aos="fade-right">
                                        <span>I <i className="flaticon-technical-support"></i></span>
                                        <h3>Premium UI/UX Design</h3>
                                        <p>In order to produce quantifiable business results, Site Dominion, a consumer-focused company, develops compelling user experiences (UX) and user interfaces (UI).</p>
                                    </li>
                                    <li className="ml" data-aos="fade-right">
                                        <span>II <i className="flaticon-shield"></i></span>
                                        <h3>Architecture & Integration</h3>
                                        <p>To interface your web application with company or outside systems and services, we set up APIs. Integrating an app allows seamless data synchronization between platforms.</p>
                                    </li>
                                    <li className="ml-25" data-aos="fade-right">
                                        <span>III <i className="flaticon-support"></i></span>
                                        <h3>Domain + Hosting</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li data-aos="fade-left">
                                        <span>IV <i className="flaticon-technical-support"></i></span>
                                        <h3>Performance Optimization</h3>
                                        <p>By selecting Site Dominion, your brand or business generates demand and more leads thanks to a website that is in line with visitor psychology.</p>
                                    </li>

                                    <li className="ml" data-aos="fade-left">
                                        <span>V <i className="flaticon-shield"></i></span>
                                        <h3>Inherent SEO</h3>
                                        <p>You have a full team of professionals working toward your online success when you collaborate with Site Dominion for your SEO requirements. We can help you achieve your objectives, whether they be to improve brand awareness, maximize sales, or generate visitors.</p>
                                    </li>

                                    <li className="ml-25" data-aos="fade-left">
                                        <span>VI <i className="flaticon-support"></i></span>
                                        <h3>Advanced Functionality</h3>
                                        <p>Our web experiences are scalable as your business expands, high performing, feature-rich, and digitally transformational. They are also user-friendly, thoroughly functional, and extremely secure.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
