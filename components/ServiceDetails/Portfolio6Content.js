import React, { Component } from 'react';
import Image from 'next/image';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <Image loading="lazy"   src="/images/greenpower.png" alt="Image" style={{"borderRadius":"1vh"}} width={900} height={500}/>
                                </div>
                                <h1>Website Link: <a href="https://articulateinsurance.vercel.app/">https://articulateinsurance.vercel.app/</a></h1>
                                <h2>Articulate Insurance - Insurance Agency Prototype Project</h2>
                                <p>Articulate Insurance is a prototype project built by Site Dominion, a web development agency, to showcase our skills in creating custom websites for insurance companies. The project was built using Next.js, a powerful web framework that provides server-side rendering and static site generation capabilities. The website features a modern and clean design that reflects the business's values and goals.</p>
                                <h3>Design:</h3>
                                <p>The website design features a blue and white color scheme, which is commonly associated with professionalism and trustworthiness. The homepage features a hero image of a happy family, along with a prominent call-to-action button that encourages users to get a quote. The website's services page provides detailed information about the different insurance services offered by Articulate Insurance, along with pricing information. The website also has a blog section where the business can share news and insights with its customers. In addition, the website has a contact page that allows users to send a message directly to the business.</p>
                                <h3>Functionality:</h3>
                                <p>The website has several features that make it easy for users to learn about the business's insurance services and contact them for a quote. The homepage features a prominent call-to-action button that encourages users to get a quote. The website's services page provides detailed information about the different insurance services offered by Articulate Insurance, along with pricing information. The website also has a blog section where the business can share news and insights with its customers. In addition, the website has a contact page that allows users to send a message directly to the business.</p>
                                <h3>Technology Stack:</h3>
                                <p>Site Dominion used Next.js as the web framework for the project. Next.js is a powerful web framework that provides server-side rendering and static site generation capabilities, which allows for faster page loading times and improved SEO. The website was styled with CSS, and the content was managed with a headless CMS, allowing for easy updates and changes.</p>
                                <h3>Conclusion:</h3>
                                <p>Articulate Insurance is a prototype project built by Site Dominion to showcase our skills in creating custom websites for insurance companies. The website's design reflects the business's values and goals, and its functionality makes it easy for users to learn about the business's insurance services and contact them for a quote. The use of Next.js allowed Site Dominion to build a performant and flexible website that will help Articulate Insurance attract new customers and grow their business. The website's headless CMS also allows for easy updates and changes, ensuring that the website remains up-to-date with the latest information.</p>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;