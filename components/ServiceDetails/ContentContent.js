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
                                <Image loading="lazy"  src="/images/content.png" alt="Image" width={660} height={494} />
                                </div>

                                <h2>Online copywriting that improves search engine rankings</h2>
                                <p>Writing targeted, promotional material for service sites, landing pages, category pages, and everything in between is known as website copywriting. It can be easier to draw people to your website and convince them to convert if your website copy is interesting.</p>
                                
                                <h3>What pages are covered?</h3>
                                <p>No matter the subject, Site Dominion's copywriting service is ideal for producing powerful copy that can be used for your homepage, service pages, about us pages, or any other landing page. Our services are frequently utilized to revamp already-existing web pages or to create content for a brand-new collection of pages.</p>
                                
                                <h3>Do you include images in your content writing/management services?</h3>
                                <p>Certainly, we can supply images that are free to use on your websites. Also, we have skilled graphic designers on hand. If necessary, they can assist you with producing unique logos, infographics, and illustrations.</p>
                                
                                <h3>How long does it take for SEO rankings to improve? </h3>

                                <p>Although SEO rankings can increase immediately, it might take 6 months or a year before you notice a noticeable shift. The primary causes of this are the always evolving search engine algorithms and market trends.

</p><p>You can relax knowing that we have seasoned SEO experts and online copywriters working for us. Together, they create a content marketing plan that quickly raises your search engine ranks.</p>

                                <h3>Conclusion:</h3>
                                <p>Our team of web geeks will create website content for you that greatly increases your prospect-to-customer ratio by using the appropriate amount of catchphrases and trigger words. In order to increase your website's visibility on search engines like Google, Bing, Yahoo, and others, your web material will also be search engine optimized. We are the masters of writing site material, regardless of the style you require: funny, direct, straightforward instructive, or enthralling persuading!</p>
                               
                                <PickServiceLink />
                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img loading="lazy"  src="/images/content-writing-pro.webp" alt="Site Dominion - Logos Display" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        SEO Optimized
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Mata Tags Inclusion 
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Speedy Delivery
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Original Content
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Upto 5 Revisions
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