import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from 'next/image';

class ServicesStyleOne extends Component {
    render() {
        return (
            <div className="features-area features-area-inner-style">
                <div className="container">
                <Tabs>
              <TabList>
                <Tab>Package</Tab>
                <Tab>All Services</Tab>
              </TabList>
              <div className="row">
              <TabPanel>
                
              <div className="col-lg-12 offset-lg-0 p-0">
                            <div className="single-features">
                                <img loading='lazy'  src="/images/mockup.png" alt="Site Dominion | Premium All-in-One Website Package." width={350} height={300}/>
                                <h3>Site Dominion Premium Website </h3>
                                <p>Go with our featured service and get the best web development service you could ask for.</p>
                                
                                <Link href="/premium-website-package">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <h3 style={{"color":"white"}}>INCLUDED WITH OUR PREMIUM WEBSITE:</h3>
              <div className="wrapper">
            
                        
                       
                       
              <div className="col-lg-3 p-0">
                            <div className="single-features single-features2" >
                                <Image loading='lazy'  src="/images/design.png" alt="Website Design and development icon." width={100} height={100}/>
                                <h3>1) Design + Development</h3>
                                <p> Site Dominion ensures that that your website loads quickly, is safe, functions flawlessly across all browsers and screen sizes, and is set up for the long term to continuously reach your business goals.</p>

                                <Link href="/website-design-and-development">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 p-0">
                            <div className="single-features single-features2" >
                            <Image loading='lazy'  src="/images/blog-setup.svg" alt="Blog-setup icon." width={100} height={100}/>
                                <h3>Blog Creation + Setup</h3>
                                <p>Reach clients and search engines with skilled professionals' high-quality, budget friendly blog and website content. A straightforward solution to cover your blogging needs.</p>
                                
                                <Link href="/blog-creation">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 offset-lg-0 p-0">
                            <div className="single-features single-features2" >
                            <Image loading='lazy'  src="/images/seo.png" alt="SEO setup icon." width={100} height={100}/>
                                <h3>2) Project Optimization</h3>
                                <p>We use SEO and tools, cutting-edge techniques, and experiments to enhance the functionality of your website, further attract more visitors, boost conversions, and increase revenue.</p>
                                
                                <Link href="/website-optimization">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 p-0">
                            <div className="single-features single-features2" >
                            <Image loading='lazy'  src="/images/deployment.png" alt="Website deployment icon." width={100} height={100}/>
                                <h3>3) Full Deployment [Hosting & Domain]</h3>
                                <p>After the completion of the developmental phase, the website is pushed into deployment. Site Dominion's premium website package covers all domain and hosting expenses, so you don't have to break a sweat.</p>
                                
                                <Link href="/website-deployment">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                        
              </TabPanel>
              </div>
              <TabPanel>
                    <div className="row">
                    <div className="col-lg-4 p-0">
                            <div className="single-features">
                            <Image loading='lazy'  src="/images/logo-design.png" alt="Logo design icon." width={100} height={100}/>
                                <h3>Logo Design</h3>
                                <p>Our goal at Site Dominion is to make the best first impression possible for your brand. One of our design experts will assist you in bringing your brand to life once you reach out to us.</p>

                                <Link href="/logo-design">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features" >
                            <Image loading='lazy'  src="/images/blog-setup.svg" alt="Blog-setup icon." width={100} height={100}/>
                                <h3>Blog Creation + Setup</h3>
                                <p>Reach clients and search engines with skilled professionals' high-quality, budget friendly blog and website content. A straightforward solution to cover your blogging needs.</p>
                                
                                <Link href="/blog-creation">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features" >
                            <Image loading='lazy'  src="/images/content-management.svg" alt="Content management icon." width={100} height={100}/>
                                
                                <h3>Website Content Writing/Management</h3>
                                <p>Don't have time to manage the content on your website? Or maybe you're unsure about how to approach it. Let our professionals assist you with creating transformational SEO friendly content to fastrack the process.</p>
                                
                                <Link href="/website-content-writing">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features" >
                                <Image loading='lazy'  src="/images/design.png" alt="Website Design and development icon." width={100} height={100}/>
                                <h3>Design + Development</h3>
                                <p> Site Dominion ensures that that your website loads quickly, is safe, functions flawlessly across all browsers and screen sizes, and is set up for the long term to continuously reach your business goals.</p>

                                <Link href="/website-design-and-development">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features" >
                            <Image loading='lazy'  src="/images/seo.png" alt="SEO setup icon." width={100} height={100}/>
                                <h3> Project Optimization</h3>
                                <p>We use SEO and tools, cutting-edge techniques, and experiments to enhance the functionality of your website, further attract more visitors, boost conversions, and increase revenue.</p>
                                
                                <Link href="/website-optimization">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features" >
                            <Image loading='lazy'  src="/images/deployment.png" alt="Website deployment icon." width={100} height={100}/>
                                <h3>Full Deployment [Hosting & Domain]</h3>
                                <p>After the completion of the developmental phase, the website is pushed into deployment. Site Dominion's premium website package covers all domain and hosting expenses, so you don't have to break a sweat.</p>
                                
                                <Link href="/website-deployment">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default ServicesStyleOne;