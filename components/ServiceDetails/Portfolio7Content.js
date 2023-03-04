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
                                    <Image loading="lazy"   src="/images/afj.png" alt="Image" style={{"borderRadius":"1vh"}} width={900} height={500}/>
                                </div>
                                <h1>Website Link: <a href="https://afj-productions.vercel.app/">https://afj-productions.vercel.app/</a></h1>
                                <h2>A Film Junkie Productions - Video Production Studio Website</h2>
                                <p>Welcome to the website overview for A Film Junkie Productions, a video production studio. Here at Site Dominion, we are thrilled to have been able to work with A Film Junkie Productions to develop their new business website using React, Vercel, Github Pages, and Next.JS.</p>
                                <p>Our team of web developers worked closely with A Film Junkie Productions to ensure that their website was not only visually appealing, but also functional and user-friendly. We chose to use React, a popular JavaScript library for building user interfaces, to ensure that the website was responsive and easy to navigate.</p>
                                
                                <h3>Technology Stack:</h3>
                                <p>To ensure that the website was fast and reliable, we utilized Vercel, a cloud platform for serverless deployment, and Github Pages, a static site hosting service. These technologies allowed us to deploy the website quickly and easily, while also ensuring that it was scalable and could handle large amounts of traffic.</p>
                                <h3>Key Features:</h3>
                                <p>One of the key features of the website is its use of Next.JS, a popular React framework that allows for server-side rendering and automatic code splitting. This allowed us to build a dynamic website that is optimized for performance and SEO, while also making it easy to manage and update content.</p>
                                <h3>Lead Generation API:</h3>
                                <p>Finally, to help A Film Junkie Productions generate leads and grow their business, we integrated Email JS, a powerful email automation platform. This allows visitors to the website to easily submit inquiries and contact the studio, while also enabling A Film Junkie Productions to manage and track leads more effectively.</p>
                                <h3>Conclusion:</h3>
                                <p>In summary, Site Dominion is proud to have been able to work with A Film Junkie Productions to develop their new business website using the latest technologies, including React, Vercel, Github Pages, Next.JS, and Email JS. We are confident that the new website will help A Film Junkie Productions to grow their business and achieve their goals.</p>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;