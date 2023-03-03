import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';
import PickServiceLink from './PickServiceLink';
import ServicesStyleFour from '../Services/ServicesStyleFour';
import Image from 'next/image'

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                <ServicesStyleFour/>
                    <div className="row">
                        <div className="col-lg-12" style={{'borderRadius':'0'}}>
                           
                            <div className="service-details-wrap industries">
                                     
                               
                                
                                

                                <h2>Logos that serve to encapsulate everything a brand constitutes</h2>
                                <p>Welcome to Site Dominion, a leading web development agency that provides top-notch services to a wide range of industries. At Site Dominion, we understand the unique needs and challenges of businesses across various sectors, which is why we are committed to providing tailored solutions that meet the specific requirements of our clients.</p>
                                <p>Our team of skilled professionals has extensive experience in web development, design, and digital marketing, which enables us to deliver outstanding results for our clients. We specialize in creating user-friendly, responsive websites that not only look great but also function seamlessly, ensuring an exceptional user experience.</p>
                                <p>We take pride in the fact that we have worked with businesses of all sizes, from startups to large enterprises, and across a diverse range of industries. Some of the industries that we serve include:</p>
                                <Image src='/images/industries.png' width={300} height={300}/>
                                <h4 id="automotive">Automotive & Transportation</h4>
                                <p>In the automotive and transportation industry, having a professional and engaging online presence is essential to attract customers and build brand recognition. We work with automotive dealerships, rental companies, logistics providers, and transportation services to create websites that showcase their services and offerings in a visually appealing and user-friendly way. Our websites are optimized for search engines and designed to increase leads, conversions, and revenue.</p>
                                <Image src='/images/automotive.png' width={150} height={150}/>
                                <h4 id="sports">Sports & Fitness</h4>
                                
                                <p>In the sports and fitness industry, having an online presence that inspires and motivates is key. We work with sports clubs, fitness centers, gyms, personal trainers, and health and wellness brands to create websites that engage and inspire their target audience. Our websites are designed to be visually appealing, responsive, and easy to navigate, ensuring a seamless user experience for visitors. We can also integrate e-commerce solutions to enable easy online booking and purchases of products and services.
                                </p><Image src='/images/sports.png' width={150} height={150}/>
                                <h4 id="landscaping">Landscaping & Lawncare</h4>
                                <p>We know that for landscaping and lawncare businesses, visual appeal is crucial. Our websites for this industry are designed to showcase the beauty of the work that businesses do while also providing the necessary information for customers to make informed decisions.</p>
                                <Image src='/images/lawncare.png' width={150} height={150}/>
                                <h4 id="insurance">Insurance & Finance</h4>
                                <p>We work with businesses in the insurance and finance industries to create websites that are both professional and trustworthy. Our websites feature secure payment gateways, compliance features, and other necessary components.</p>
                                <Image src='/images/insurance.png' width={150} height={150}/>
                                <h4 id="construction">Construction & Trade Work</h4>
                                
                                <p>For businesses in the construction and trade work industry, we understand the importance of a strong online presence. We develop websites that showcase completed projects, promote services, and provide the necessary information for potential customers to make informed decisions.</p>
                                <Image src='/images/construction.png' width={150} height={150}/>
                                <h4 id="entertainment">Entertainment</h4>
                                <p>We create websites for businesses in the entertainment industry that showcase events, provide ticket sales, and engage visitors with immersive content. Our websites are designed to be visually stunning, easy to navigate, and optimized for search engines.</p>
                                <Image src='/images/entertainment.png' width={150} height={150}/>
                                <h4 id="realestate">Real Estate</h4>
                                <p>We work with real estate agents and brokerages to develop websites that showcase their properties and services in the best possible light. Our websites are designed to be easy to navigate, visually appealing, and optimized for search engines.</p>
                                <Image src='/images/realestate.png' width={150} height={150}/>
                                <h4 id="homeservices">Home Services</h4>
                                <p>We work with businesses in the home services industry to develop websites that showcase their services and help potential customers connect with them. Our websites feature easy-to-use booking systems, reviews, and other necessary components for businesses in this industry.</p>
                                <Image src='/images/homeservices.png' width={150} height={150}/>
                                <h4 id="law">Law Firms</h4>
                                <p>We understand the unique needs of law firms and attorneys. We create websites that highlight your services, showcase your expertise, and provide an easy-to-use booking system to help you win more clients.</p>
                                <Image src='/images/law.png' width={150} height={150}/>
                                <h4 id="other">Other Services</h4>
                                
                                <p>At Site Dominion, we have the expertise and experience to serve businesses across a wide range of industries. Whether you are in the hospitality industry, food and beverage, non-profit, or any other sector, we can help you develop a website that meets your specific needs.</p>
                                <Image src='/images/other.png' width={150} height={150}/>
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