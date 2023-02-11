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
                                    <li>
                                        <span>I <i className="flaticon-technical-support"></i></span>
                                        <h3>Premium UI/UX Design</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                    <li className="ml">
                                        <span>II <i className="flaticon-shield"></i></span>
                                        <h3>Development</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                    <li className="ml-25">
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
                                    <li>
                                        <span>IV <i className="flaticon-technical-support"></i></span>
                                        <h3>Performance Optimization</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml">
                                        <span>V <i className="flaticon-shield"></i></span>
                                        <h3>Inherent SEO</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>VI <i className="flaticon-support"></i></span>
                                        <h3>Advanced Functionality</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
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
