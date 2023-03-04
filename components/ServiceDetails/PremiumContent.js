import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';
import PickServiceLink from './PickServiceLink';
import PremiumTop from './PremiumTop';
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
                                    <Image loading="lazy"  src="/images/mockup.png" alt="Image" width={660} height={494} />
                                </div>
                                <PremiumTop/>
                                <h2>All-In-One Premium Package: Website Design, Development, SEO, Blog & Deployment</h2>
                                <p>The web developers at Site Dominion assist companies and brands in navigating the constantly evolving digital market by offering client-focused, consumer-based website solutions that produce quantifiable business results.</p>
                                <p><div className='img' ><img loading="lazy" src="/images/main-img1.png" alt="Image" /></div>We can help you stand out from the competition by selecting the appropriate color schemes, digital elements, and design aspects that appeal to your target audience thanks to our years of experience in the web design sector. We go above and beyond to design a website that precisely embodies your business and enables you to establish deeper connections with both potential and current clients.</p>
                                <h3>Enterprise Level Website Design & Development</h3>
                                <p>We directly collaborate with small businesses & enterprise-level clients to build exceptional, high-performing, and secure custom websites with a focus on distinctive, polished web design. Regardless of what your project calls for, Site Dominion has the resources and expertise to guarantee that your objectives are met with beyond satisfactory results.</p>
                                <h3>Full Website Deployment</h3>
                                <p>When we've finished building your website, tested it to ensure it functions as expected, and are prepared to push it to a live web server, we say that your website is deployed.</p>
                                <h3>Blog Creation & Setup</h3>
                                <p>When setting up and maintaining a blog, you will communicate with your intended audience directly. It offers your business the possibility to spread messages that may not otherwise be heard. A blog may be used for everything, from announcing new products and significant updates to establishing your business as an industry authority.
</p>
<p>By optimizing your web pages, including your blog entries, you may increase the number of people who find your business online by using search engines like Google. Ranking criteria are used by Google and other search engines to determine the results that appear for each search query. It determines how and where to prioritize those results as well. </p>
                                <p>Spread the word about your story by choosing Site Dominion to setup your blog. Make a statement with a blog website that has been expertly designed and can be modified to meet your brand.</p>
                                <h3>Why Choose Site Dominion?</h3>
                                <p>We offer a broad range of digital services. Every element of maximizing the value of your company is included in our website development projects. For this reason, we also provide other services including blog building, content authoring and maintenance, search engine optimization, and logo and visual design. We don't only create websites. We help your online business become more reputable, successful, and scalable.</p>
                                <h4>1. Improve sales and profitability</h4>
                                <p><div className='img' ><img loading="lazy" src="/images/profit.svg" alt="Image" /></div>A visually appealing website will encourage people to browse it at ease. As a result, customers will have more faith in your products or services and are more inclined to buy from you, boosting your profitability and revenue.</p>
                                <p>For both user satisfaction and increasing your exposure on search engines like Google and Bing, you need a complete SEO-friendly website design. At Site Dominion, we are aware of the effort required to create an effective website. We offer small businesses web design and development services with a user interface (UI) and experience (UX) focus that is centered on SEO. From the moment your site launches, our excellent, cost-effective design service will optimize it to outperform your rivals. We will work with you to design your website from the ground up with growth in mind, whether you're starting a new company or enhancing an existing one.</p>
                                <h4>2. Fully Responsive on all screen sizes.</h4>
                                <p>Making your website mobile-friendly and improving its responsiveness are crucial throughout website development. This will prevent lags when visitors and potential customers access your website from mobile devices, tablets, laptops, desktops and other devices. <div className='img' ><img loading="lazy"  src="/images/iphonemockup.png" alt="Image" /></div></p>
                                <h4>3. Fast Page Loading Speed</h4>
                                <div className='img' ><img loading="lazy" src="/images/siteperformance.webp" alt="Image" /></div>
                                <p>Your visitors may become dissatisfied with a slow website, abandon it, and go to one of your rivals who have faster-loading sites to find the goods or services you're offering. By picking Site Dominion for your website development needs, you can effortlessly boost the speed of your site and make it easier for people to navigate between different pages.</p>
                                <h4>4. ADA Compliant</h4>
                                <p>The Americans With Disabilities Act (ADA) aims to achieve equity in the IT industry, and web accessibility should be the new standard. No matter their physical or mental capabilities, anyone can visit websites more easily thanks to ADA web compliance. Regardless of how familiar you are with the current digital content rules or how little you have heard of them, we will carefully collect your needs in order to develop a practical accessibility roadmap.<div className='img' ><img loading="lazy" src="/images/ada.png" alt="Image" /></div></p>
                                <h3>Conclusion:</h3>
                                <p>Your website serves as the gateway to your organization. Since it is one of the first things visitors will observe about your brand, it must be attractive, simple to use, and packed with pertinent information. We can collaborate with you to create a website for your company that accurately reflects your brand and has a concise and appealing design. </p>

                                <PickServiceLink/>
                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img loading="lazy" src="/images/web.png" alt="Site Dominion - website design and development" />
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