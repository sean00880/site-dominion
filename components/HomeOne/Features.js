import Link from 'next/link'
import TopSections from '../HomeOne/TopSections'
import Image from 'next/image'

const Features = () => {
        return (
            <section className="features-area services" style={{"borderBottom":"2px solid #3c3838"}}>
                
                <div className="container">
                    <div className="row">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <hr />
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi rem quo itaque minus dolorem ratione vero, quisquam reiciendis quia atque eos aspernatur.</h4>
                    </div>
                
                <hr />
                <h3 style={{"color":"#f0ecec"}}>Go with Site Dominion's featured website package. We handle everything for you, from design to developement, hosting, deployment and optimization.</h3>                       
                        <h1>All-In-One Package</h1>
                        <TopSections/>
                        <div className="wrapper"  data-aos="fade-down">
                      
                       
                       <div className="col-lg-4 p-0">
                            <div className="single-features" data-aos="flip-left"  data-aos-duration="1200" >
                                <Image src="/images/design.png" width={100} height={100}/>
                                <h3>1) Design + Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features" data-aos="flip-up"  data-aos-duration="1200" data-aos-delay="100">
                            <Image src="/images/deployment.png" width={100} height={100}/>
                                <h3>2) Full Deployment [Hosting & Domain]</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features" data-aos="flip-right"  data-aos-duration="1200" >
                            <Image src="/images/seo.png" width={100} height={100}/>
                                <h3>3) Project Optimization</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                       <hr />
                       <div className='wrapper2'  data-aos="fade-down">
                            <div>
                                Check out our existing clients' projects:
                                <br />
                            <Link href="/about-1">
                                <a className="default-btn2">
                                    View Live Projects
                                </a>
                            </Link>
                            </div>
                            <div>
                            Ready for your Website? Go Live With Site Dominion & Transform Your Business:
                                <br />
                            <Link href="/getting-started">
                            
                                <a className="default-btn1">
                                    Get Started
                                </a>
                            </Link>
                            </div>
                        </div>

                <h3 style={{"color":"#f0ecec"}}>Or you can get started by choosing a service. </h3>
                <div className="wrapper">
                    
                        <div className="col-lg-4 p-0">
                            <div className="single-features" data-aos="flip-left"  data-aos-duration="1200" >
                            <Image src="/images/logo-design.png" width={100} height={100}/>
                                <h3>Logo Design</h3>
                                <p>Our goal at Site Dominion is to make the best first impression possible for your brand. And it all starts with a standout logo and specialized materials that are skillfully manufactured. One of our design experts will assist you in bringing your brand to life once you reach out to us.</p>

                                <Link href="/logo-design">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features" data-aos="flip-down"  data-aos-duration="1200"  data-aos-delay="100" >
                            <Image src="/images/blog-setup.svg" width={100} height={100}/>
                                <h3>Blog Creation + Setup</h3>
                                <p>Reach clients and search engines with skilled professionals' high-quality, budget friendly blog and website content. A straightforward solution to cover your blogging needs.</p>
                                
                                <Link href="/blog-creation">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features" data-aos="flip-right"  data-aos-duration="1200" >
                            <Image src="/images/content-management.svg" width={100} height={100}/>
                                
                                <h3>Content Creation/Management</h3>
                                <p>Don't have time to manage the content on your website? Or maybe you're unsure about how to approach it. Let our professionals assist you with creating transformational SEO friendly content to fastrack the process.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className='wrapper2'>
                            <div>
                                Browse our Prototype Projects:
                                <br />
                            <Link href="/about-1">
                                <a className="default-btn2">
                                    Prototype Projects
                                </a>
                            </Link>
                            </div>
                            <div>
                            Full List of Services:
                                <br />
                            <Link href="/services">
                            
                                <a className="default-btn1">
                                    All Services
                                </a>
                            </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        )
}

export default Features;