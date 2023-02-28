import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8" style={{'borderRadius':'0'}}>
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/blogImage.png" alt="Image" />
                                </div>

                                <h2>Blog Creation Services that Deliver Engaging Blog Designs</h2>

                                <p>With the help of a corporate blog, you can engage with your audience and promote consistent online brand messaging. The way your blog is laid out, though, can significantly influence how readers interact with it.</p>

                                <p>When setting up and maintaining a blog, you will communicate with your intended audience directly. It offers your business the possibility to spread messages that may not otherwise be heard. A blog may be used for everything, from announcing new products and significant updates to establishing your business as an industry authority. </p>

                                <p>Our blog designers are aware of the significance of blogging for businesses. Consequently, they put the same amount of effort into producing blogs as they do into creating complete corporate websites.</p>

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
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;