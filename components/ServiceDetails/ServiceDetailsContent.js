import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <Image loading="lazy"  height={100} width={100}  src="/images/services-details/services-details.jpg" alt="Image" />
                                </div>

                                <h3>Service Of Warehousing</h3>
                                <p>Your company's logo engages customers and potential clients in a subtle yet effective way. Your logo is frequently the first thing customers will notice about your business, and the initial image they have of you could influence how interested they become in working with you in the future.</p>

                                <p>Our top-notch logo designers have the expertise and imagination needed to produce significant outcomes. We work hard to comprehend your brand, down to the smallest of details, in order to produce eye-catching visual solutions that highlight your business and your narrative.
</p>

                                <p>We collaborate with our clients to create distinctive logos that are appropriate for the companies, goods, and services they stand for.</p>

                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <Image loading="lazy"  height={100} width={100}  src="/images/services-details/services-details2.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Engine bay cleaned and dressed
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Door card panels cleaned
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Plastic trim enhanced
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Paint surface clay barred
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Alloy wheel treatment inside and out
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AskQuestionForm />
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;