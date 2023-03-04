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
                                <h1>Website Link: <a href="https://greenpower-delta.vercel.app/">https://greenpower-delta.vercel.app/</a></h1>
                                <h2>Greenpower Landscaping - Landscaping Prototype Project</h2>
                                <p>Greenpower Landscaping LLC is a prototype project built by Site Dominion, a web development agency, to showcase our skills in creating custom websites for landscaping businesses. The project was built using a combination of React, Next.js, and CSS, and it features a modern and clean design that reflects the business's values and goals.</p>
                                <h3>Design:</h3>
                                <p>The website design features a green, black and white color scheme, which is commonly associated with nature and environmental friendliness. The homepage features a hero image of a beautiful garden, along with a prominent call-to-action button that encourages users to request a quote. The website's services page provides detailed information about the different services offered by Greenpower Landscaping LLC, along with pricing information. The website also has a gallery section where the business can showcase their previous work, which can help potential customers get an idea of the quality of their services.</p>
                                <h3>Functionality:</h3>
                                <p>The website has several features that make it easy for users to learn about the business's services and contact them for work. The homepage features a prominent call-to-action button that encourages users to request a quote. The website's services page provides detailed information about the different services offered by Greenpower Landscaping LLC, along with pricing information. The website also has a blog section where the business can share news and insights with its customers. In addition, the website has a contact page that allows users to send a message directly to the business.</p>
                                <h3>Technology Stack:</h3>
                                <p>Site Dominion used React as the front-end library for the project. React is a popular library for building user interfaces, and its component-based architecture makes it easy to build and maintain complex web applications. Next.js was used as the web framework, providing server-side rendering and static site generation capabilities. The website was styled with CSS.</p>
                                <h3>Conclusion:</h3>
                                <p>Greenpower Landscaping LLC is a prototype project built by Site Dominion to showcase our skills in creating custom websites for landscaping businesses. The website's design reflects the business's values and goals, and its functionality makes it easy for users to learn about the business's services and contact them for work. The use of React and Next.js allowed Site Dominion to build a performant and flexible website that will help Greenpower Landscaping LLC attract new customers and grow their business.</p>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;