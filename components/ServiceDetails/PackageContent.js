import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';
import PickServiceLink from './PickServiceLink';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{'borderRadius':'0'}}>
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img loading="lazy"  src="/images/faq-img.png" alt="Image" />
                                </div>

                                <h2>Logos that serve to encapsulate everything a brand constitutes</h2>
                                <p>Your company's logo engages customers and potential clients in a subtle yet effective way. Your logo is frequently the first thing customers will notice about your business, and the initial image they have of you could influence how interested they become in working with you in the future.</p>

                                <p>Our top-notch logo designers have the expertise and imagination needed to produce significant outcomes. We work hard to comprehend your brand, down to the smallest of details, in order to produce eye-catching visual solutions that highlight your business and your narrative.
</p>

                                <p>We collaborate with our clients to create distinctive logos that are appropriate for the companies, goods, and services they stand for.</p>
                                
                                <PickServiceLink/>
                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img loading="lazy"  src="/images/services-details/services-details.jpg" alt="Site Dominion - Logos Display" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Luxurious UI/UX 
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Website Design + Development + Deployment
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Free Prototype Website @ 50% Pay
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Blog Setup
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Fully Responsive
                                                    </li>
                                                </ul>
                                            </div>
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

export default ServiceDetailsContent;