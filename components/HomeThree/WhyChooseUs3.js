import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area" style={{"padding":"0", "borderRadius":"0 0 1vh 1vh"}} id="why-us">
                <div className="container2" style={{"borderRadius":"0 0 1vh 1vh", "padding":"0","background":"none"}}>
                    <div className="section-title" style={{"borderRadius":"0"}}>
                        <span>Why Choose Us</span>
                        <h2>What's included in our featured website package?</h2>
                        <hr />
                        <h4>Site Dominion's promise is to produce and deliver websites of the highest caliber in order to provide direct value to businesses accross the globe.</h4>
                    </div>

                    <div className="row align-items-center" style={{"borderRadius":"0 0 1vh 1vh", "background":"none"}}>
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>I <i role="none" className="flaticon-technical-support"></i></span>
                                        <h3>Premium UI/UX Design</h3>
                                        <p>In order to produce quantifiable business results, Site Dominion, a consumer-focused company, develops compelling user experiences (UX) and user interfaces (UI).</p>
                                    </li>
                                    <li role="none" className="ml">
                                        <span>II <i role="none" className="flaticon-shield"></i></span>
                                        <h3>Architecture & Integration</h3>
                                        <p>To interface your web application with company or outside systems and services, we set up APIs. Integrating an app allows seamless data synchronization between platforms.</p>
                                    </li>
                                    <li role="none" className="ml-25">
                                        <span>III <i role="none" className="flaticon-support"></i></span>
                                        <h3>Domain + Hosting</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>IV <i role="none" className="flaticon-technical-support"></i></span>
                                        <h3>Performance Optimization</h3>
                                        <p>By selecting Site Dominion, your brand or business generates demand and more leads thanks to a website that is in line with visitor psychology.</p>
                                    </li>

                                    <li role="none" className="ml" >
                                        <span>V <i role="none" className="flaticon-shield"></i></span>
                                        <h3>Inherent SEO</h3>
                                        <p>You have a full team of professionals working toward your online success when you collaborate with Site Dominion for your SEO requirements. We can help you achieve your objectives, whether they be to improve brand awareness, maximize sales, or generate visitors.</p>
                                    </li>

                                    <li role="none" className="ml-25" >
                                        <span>VI <i role="none" className="flaticon-support"></i></span>
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
