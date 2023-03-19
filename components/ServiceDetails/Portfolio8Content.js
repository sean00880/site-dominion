import React, { Component } from 'react';
import Image from 'next/image';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container" style={{"borderRadius":"0", "padding":"0"}}>
                    <div className="row" style={{"borderRadius":"0", "backgroundColor":"#e7e7e7"}}>
                        <div className="col-lg-12">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <Image loading="lazy"   src="/images/metanetic.png" style={{"borderRadius":"1vh"}} width={900} height={500} alt="Image" />
                                </div>
                                <h1>Website Link: <a href="https://alpha-lovat.vercel.app/">https://alpha-lovat.vercel.app/</a></h1>
                                <h2>Metanetic - A Social Media Marketing Agency</h2>
<p>Site Dominion has been commissioned to develop a website for Metanetic, a social media marketing agency that provides web development, graphic design, and digital marketing as their primary services. The website will be developed using Next JS, a popular React framework that provides an efficient and scalable solution for building complex web applications. The website will serve as a central platform for Metanetic to showcase their services, portfolio, and expertise to potential clients and partners.</p>
<h3>Project Goals</h3>
<p>The primary goal of the project is to create a visually appealing and user-friendly website that effectively communicates Metanetic's services, brand identity, and values. The website should also be responsive and optimized for search engines, ensuring that potential clients can easily find and access Metanetic's services. Additionally, the website should be built with scalability in mind, allowing for future expansion and updates as the company grows.</p>
<h3>Key Features</h3>
<p>The Metanetic website will include the following key features:</p>
<ul>
<li><strong>Homepage:</strong> The homepage will provide an overview of Metanetic's services, portfolio, and team members. It will also include a call-to-action section, encouraging visitors to contact Metanetic for more information or to schedule a consultation.</li>
<li><strong>Services:</strong> A dedicated services page will provide detailed information about Metanetic's web development, graphic design, and digital marketing services. Each service will be described in detail, with examples of past projects and client testimonials.</li>
<li><strong>Portfolio:</strong> The portfolio page will showcase Metanetic's past projects, providing visitors with a visual representation of the company's capabilities and expertise. Each project will include a brief description, images, and links to the live websites or marketing campaigns.</li>
<li><strong>About Us:</strong> The About Us page will provide information about Metanetic's history, mission, and team members. This page will also include a section highlighting the company's core values, such as creativity, innovation, and customer satisfaction.</li>
<li><strong>Contact Us:</strong> A dedicated contact page will provide visitors with multiple ways to contact Metanetic, including a contact form, phone number, email address, and social media links.</li>
</ul>
<h3>Conclusion</h3>
<p>The development of the Metanetic website is an exciting opportunity for Site Dominion to showcase our expertise in web development and design. We look forward to working closely with the Metanetic team to create a website that accurately represents their brand and helps them achieve their business goals.</p>
                            
                            </div>
                          
                        </div>
                    
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;