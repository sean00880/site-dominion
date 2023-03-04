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
                                    <Image loading="lazy"   src="/images/designationdump.png" alt="Image" style={{"borderRadius":"1vh"}} width={900} height={500}/>
                                </div>
                                <h1>Website Link: <a href="https://www.designationdumpllc.com">https://www.designationdumpllc.com</a></h1>
                                <h2>Designation Dump LLC - Junk Removal Business in Columbus, Ohio</h2>
                                <p>Site Dominion was approached by Designation Dump LLC, a junk removal business, to create a new website for their business. </p>
                                <h3>Technology Stack:</h3>
                                <p>
                                To build the website, we decided to use a combination of React, Vercel, Github Pages, and Next.js, which allowed us to create a dynamic and high-performing website that accurately represented Designation Dump LLC's brand and values.</p>
                                <p>Next, we utilized Vercel, a cloud-based platform for building, deploying, and hosting websites, to ensure that the website was fast and reliable. Vercel provided automatic code updates, built-in performance optimization, and easy deployment, making it the perfect choice for Designation Dump LLC's website.</p>
                                <p>We also used Github Pages, a static site hosting service, to host the website's source code. Github Pages allowed us to easily manage and update the website's codebase, ensuring that it was always up-to-date and accessible to the Designation Dump LLC team.</p>
                                <p>Finally, we used Next.js, a React-based web framework, to provide server-side rendering and dynamic content updates. Next.js allowed us to build a fast and performant website that was optimized for search engines and user experience.</p>
                                <h3>Design Considerations:</h3>
                                <p>In terms of design, we worked closely with Designation Dump LLC to create a website that accurately represented their brand and values. We utilized a clean and modern design aesthetic that was easy to navigate and highlighted the business's services and value proposition. We also included a prominent call-to-action button that encouraged users to request a quote or get in touch with the Designation Dump LLC team.</p>
                                <h3>Website Functionality:</h3>
                                <p>The website has several features that make it easy for users to learn about the business's services and contact them for work. The homepage features a prominent call to action that encourages users to request a quote. The website's services page provides detailed information about the different services offered by Designation Dump LLC, along with pricing information. The website also has a blog section where the business can share news and insights with its customers.</p>
                                <h3>Conclusion:</h3>
                                <p>Overall, our team at Site Dominion is proud of the website we built for Designation Dump LLC. By using a combination of React, Vercel, Github Pages, and Next.js, we were able to create a fast, reliable, and dynamic website that accurately represented the business's brand and values. We look forward to working with Designation Dump LLC and other businesses in the future to create high-performing and visually appealing websites.</p>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;