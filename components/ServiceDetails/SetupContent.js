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
                                <Image loading="lazy"  src="/images/deployment2.png" alt="Image" width={660} height={494} />
                                </div>

                                <h2>Full Website Deployment & Configuration</h2>
                                <p>At Site Dominion, we understand that deploying a website can be a daunting task, especially if you're not familiar with the technical aspects of the process. That's why we offer website deployment services to help ensure that your website is up and running smoothly in no time.</p>
                                <h3>Our Process</h3>
                                <p>At Site Dominion, we understand that building a website is just the first step in your online journey. Once your website is designed and developed, it needs to be deployed and launched to the world. This is where our website deployment services come in. We offer a comprehensive range of deployment services to ensure that your website is launched quickly and seamlessly, with minimal downtime and maximum impact. Our team of experts will work with you to identify the best deployment strategy for your website, whether it's a simple static site or a complex web application. We take care of everything, from configuring your server to optimizing your website's performance, so you can focus on growing your business.</p>
                                <h4>1. Domain & Hosting</h4>
                                <p>Our team of experts provides end-to-end website deployment services, starting with domain registration and hosting setup. We'll work with you to identify the best domain name for your website and help you select the right hosting plan based on your needs and budget.</p>
                                <h4>2. Post Setup Configuration</h4>
                                <p>Once your domain and hosting are set up, we'll take care of the technical aspects of website deployment, including website installation, configuration, and testing. Our team will ensure that your website is set up correctly and functions as expected, so you can focus on creating engaging content and building your brand.</p>
                                <h3> Optimization & Maintainance</h3>
                                <p>With Site Dominion, you can rest assured that your website will be deployed using best practices and optimized for performance, security, and search engine visibility. We'll also provide ongoing support and maintenance to ensure that your website stays up-to-date and secure.</p>
                                <h3>Conclusion</h3>
                                <p>Partnering with Site Dominion for website deployment and related services means you can get back to what you do best - running your business - while we take care of the technical details. Contact us today to learn more about our website deployment and development services and how we can help you build a strong online presence.</p>
                                <PickServiceLink/>
                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img loading="lazy" src="/images/webdeploy.webp" alt="Site Dominion - website design and development" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Domain + Hosting
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Post Setup Configurations
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Meta Inlcusion 
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Performance Optimization
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Testing
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