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
                                <Image loading="lazy"  src="/images/design1.png" alt="Image" width={660} height={494} />
                                </div>

                                <h2>Maximize Your Online Potential with Our Website Optimization Services</h2>
                                <p>Website optimization is a crucial aspect of online marketing that every business owner needs to consider. It involves the process of making changes to a website to improve its performance and user experience. Website optimization can help increase traffic, improve search engine rankings, and boost conversion rates.</p>
                                <h3>Our Website Optimization Process:</h3>
                                <p>At Site Dominion, we understand the importance of website optimization for your business, and we are here to help you with our comprehensive website optimization services.</p>
                                <h4>1. Website Audit</h4>
                                <p>Identifying the keywords and phrases that your target audience is using to search for products or services that you offer. <div className='img' ><img loading="lazy"  src="/images/auditlogo.png" alt="img" /></div></p>
                                
                                <p>Our team at Site Dominion can help you optimize your website for the right keywords by conducting thorough keyword research. By optimizing your website for the right keywords, you can improve your search engine rankings, attract more targeted traffic, and increase your chances of converting visitors into customers.</p>
                               
                                <h4>3. Search Engine Optimization</h4>
                                
                                <p>Search Engine Optimization(SEO) involves making changes to the content and structure of your website to improve its performance and search engine rankings.</p>
                                <p><div className='img' ><img loading="lazy"  src="/images/seo.png" alt="img" /></div>Our team of experts can help you optimize your website's content and structure to improve its performance and search engine rankings. We will ensure that your website is search engine friendly and user-friendly, helping you attract more targeted traffic and improve your conversion rates.</p>
                                <h4>4. Page Speed Optimization</h4>
                                <p>We understand that website speed is critical to your online success. A slow website not only creates a poor user experience, but it also affects your search engine ranking, leading to lower traffic and conversions. That's why we offer page speed optimization services to help improve the loading speed of your website.</p>
                                
                                <p>Our team of experts uses the latest tools and techniques to analyze and optimize every aspect of your website that affects page speed, including image optimization, caching, and code optimization. We also offer website hosting recommendations and server configuration optimization to ensure your website is running at its optimal speed.</p>
                                <div className='img' ><img loading="lazy"  src="/images/speed.png" alt="img" /></div>
                                <p>Our page speed optimization services are tailored to your specific needs and goals, whether you have an e-commerce website, a blog, or a portfolio site. We work with you to identify the areas that need improvement and develop a customized plan that meets your unique needs.</p>
                                <p>By partnering with Site Dominion for page speed optimization, you can expect faster loading times, improved user experience, and increased search engine ranking. Our proven track record of successful page speed optimization projects speaks for itself, and we're confident that we can help take your website to the next level.</p>
                                <h3>Conclusion:</h3>
                                <p>Don't let a bland and slow website hold you back. Contact us today to learn more about how we can help your website perform at its best.</p>
                                <PickServiceLink/>
                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img loading="lazy"  src="/images/optimized.png" alt="Site Dominion - Website Optimization" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Website Audit
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Top Keywords Inclusion
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Page Speed Optimization
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        SEO Friendly Content
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