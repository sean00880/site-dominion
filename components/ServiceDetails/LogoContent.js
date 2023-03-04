import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';
import PickServiceLink from './PickServiceLink';
import Image from 'next/image';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{'borderRadius':'0'}}>
                            <div className="service-details-wrap">
                                <div className="service-img">
                                <Image loading="lazy"  src="/images/logomock.png" alt="Image" width={660} height={494} />
                                </div>

                                <h2>Logos that serve to encapsulate everything a brand constitutes</h2>
                                <p>Your company's logo engages customers and potential clients in a subtle yet effective way. Your logo is frequently the first thing customers will notice about your business, and the initial image they have of you could influence how interested they become in working with you in the future.</p>
                                
                                <h3>Why Choose Site Dominion for your business/brand logo?</h3>

                                <p>Your logo is an essential aspect of your brand identity. It's the visual representation of your company that helps customers recognize and remember your business. At Site Dominion, we offer professional logo design services to help you create a unique and memorable logo that represents your brand.</p>
                                <h4>1.Transforming Your Brand Identity</h4>
                                <p>Our team of experienced designers will work closely with you to understand your business and brand values to create a logo that reflects your unique identity. We'll provide you with multiple concepts to choose from, and we'll make revisions until you're completely satisfied with the design.</p>
                                <h4>2. Fully Custom & Original Design</h4>
                                <p>Our logo design services are customizable to your specific needs, whether you need a simple logo or a complex design. We'll ensure that your logo is created using best practices, such as color theory, typography, and visual hierarchy, to ensure that it's effective and memorable.</p>
                                <h4>3. Strategic Branding</h4>
                                <p>In addition to logo design, we offer a range of branding services, including brand strategy, brand messaging, and brand guidelines. We'll work with you to create a cohesive brand identity that resonates with your target audience and sets you apart from your competition.</p>
                                
                                <h3>Conclusion</h3>
                                <p>Our top-notch logo designers have the expertise and imagination needed to produce significant outcomes. We work hard to comprehend your brand, down to the smallest of details, in order to produce eye-catching visual solutions that highlight your business and your narrative.
</p>

                                <p>We collaborate with our clients to create distinctive logos that are appropriate for the companies, goods, and services they stand for. Contact us today to learn more about our logo design and branding services and how we can help you create a strong and memorable brand identity.</p>

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
                                                        Brand Identity Revamp
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Custom Design
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        100% Original
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Multiple Variations
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Upto 3 Revisions 
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