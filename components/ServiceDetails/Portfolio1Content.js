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
                                    <Image loading="lazy"   src="/images/services-details/services-details.jpg" style={{"borderRadius":"1vh"}} width={900} height={500} alt="Image" />
                                </div>

                                <h3>Decoded Web - Website Development Agency Website</h3>
                                <h1>Website Link: <a href="https://www.decodedweb.us">https://www.decodedweb.us</a></h1>
                                <p>Decoded Web was originally built as a portfolio project in order to showcase our first developments. It was later transitioned into a web-development portal and served our outreach goals early on in business. In simple words, Decoded Web is the predecessor of Site Dominion. It was reengineered and all of our business operations were migrated to what we have today at Site Dominion (https://www.sitedominion.com).</p>

<p>Utilizing NextJS's interface allows us to simplify the routing process within React and make components and display them on pages easily, that are rendered client-side as well as server-side, enhancing the site's load time significantly by first rendering content server-side and then client-side.</p>

<p>Next JS's inherent features also are excellent for SEO optimization. NextJS's client-end transitioning between routes makes it a very appealing asset.</p>
                                
                            </div>
                          
                        </div>
                    
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;