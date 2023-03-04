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
                                    <Image loading="lazy"   src="/images/grandparons1.png" alt="Image" style={{"borderRadius":"1vh"}} width={900} height={500}/>
                                </div>
                                <h1>Website Link: <a href="https://www.grandparonsllc.com">https://www.grandparonsllc.com</a></h1>
                                <h2>Grandpa Ron's LLC - Landscaping Business in Columbus, Ohio</h2>
                                <p>As a web development agency, Site Dominion was thrilled to work with Grandpa Ron's LLC, a family-owned landscaping business, to build a new website that accurately reflected their values and showcased their services. </p>
                                <h3>Technology Stack:</h3>
                                <p>
                                To ensure that the website would be fast, reliable, and optimized for search engines, we used a combination of React, Vercel, Github Pages, Email JS (for Lead Generation), and Next.js.</p>
                                <p>First, we used React, a popular JavaScript library, to build the website's frontend. React allowed us to create reusable UI components that could be easily updated and modified as needed. This approach also ensured that the website's codebase was organized, easy to maintain, and scalable.</p>
                                <p>Next, we utilized Vercel, a cloud-based platform for building, deploying, and hosting websites, to ensure that the website was fast and reliable. Vercel provided automatic code updates, built-in performance optimization, and easy deployment, making it the perfect choice for Grandpa Ron's LLC's website.</p>
                                <p>We also used Github Pages, a static site hosting service, to host the website's source code. Github Pages allowed us to easily manage and update the website's codebase, ensuring that it was always up-to-date and accessible to the Grandpa Ron's LLC team.</p>
                                <p>To optimize the website for search engines, we used Next.js, a React-based web framework that provides server-side rendering and dynamic content updates. Next.js allowed us to build a fast and performant website that was optimized for search engines and user experience. We also included on-page SEO techniques such as meta descriptions, image alt tags, and structured data.</p>
                                <p>To further optimize lead generation, we used Email JS, a platform that allows businesses to send emails directly from their website, to capture leads from the website's contact form. This integration allowed Grandpa Ron's LLC to receive leads directly in their email inbox and follow up with potential customers in a timely manner.</p>
                                <h3>Design Considerations:</h3>
                                <p>In terms of design, we worked closely with Grandpa Ron's LLC to create a website that accurately represented their brand and values. We utilized a clean and modern design aesthetic that was easy to navigate and highlighted the business's services and value proposition. We also included a prominent call-to-action button that encouraged users to request a quote or get in touch with the Grandpa Ron's LLC team.</p>
                                <h3>Website Functionality:</h3>
                                <p>The website has several features that make it easy for users to learn about the business's services and contact them for work. The homepage features a prominent call to action that encourages users to request a quote. The website's services page provides detailed information about the different services offered by Grandpa Ron's LLC, along with pricing information. The website also has a gallery section where the business can showcase their previous work, which can help potential customers get an idea of the quality of their services.</p>
                                <h3>Conclusion:</h3>
                                <p>Overall, Grandpa Ron's LLC's website provides a comprehensive overview of the company's services and capabilities, while also offering an easy-to-use interface for customers to request quotes and schedule appointments. The use of Next.JS allows for fast and efficient server-side rendering, resulting in a seamless user experience across all devices.</p>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;