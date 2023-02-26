import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container" style={{"borderRadius":"0"}}>
                    <div className="row" style={{"borderRadius":"1vh", "backgroundColor":"#e7e7e7"}}>
                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/services-details/services-details.jpg" alt="Image" />
                                </div>

                                <h3>Project Overview</h3>
                                <p>Decoded Web was originally built as a portfolio project in order to showcase our first developments. It was later transitioned into a web-development portal and served our outreach goals early on in business. In simple words, Decoded Web is the predecessor of Site Dominion. It was reengineered and all of our business operations were migrated to what we have today at Site Dominion (https://www.sitedominion.com).</p>

<p>Utilizing NextJS's interface allows us to simplify the routing process within React and make components and display them on pages easily, that are rendered client-side as well as server-side, enhancing the site's load time significantly by first rendering content server-side and then client-side.</p>

<p>Next JS's inherent features also are excellent for SEO optimization. NextJS's client-end transitioning between routes makes it a very appealing asset.</p>

                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img src="/images/services-details/services-details2.png" alt="Image" />
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

                                
                            </div>
                          
                        </div>
                       


                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                        <AskQuestionForm />
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;