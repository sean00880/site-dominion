import Link from 'next/link'
import TopSections from '../HomeOne/TopSections'
import Image from 'next/image'

const Features = () => {
        return (
            <section className="features-area services" style={{"borderBottom":"2px solid #3c3838"}}>
                
                <div className="container">
                    <div className="row">
                    <div className="section-title" style={{margin:"1vh 0"}}>
                        <h2>Our Services</h2>
                        <hr />
                        <h4>Empower your digital presence with an exceptional web development agency. Unleash the power of innovation, creativity, and expertise to craft a website that exceeds your expectations. Let us elevate your online presence to new heights with our exceptional web development services.</h4>
                    </div>
                
                <hr />
                <TopSections/>
                <div className="col-lg-12 offset-lg-0 p-0">
                            <div className="single-features">
                                <Image loading="lazy"  src="/images/mockup3.png" className='premium' alt="Site Dominion | Premium All-in-One Website Package." width={330} height={240}/>
                                <h3>Site Dominion Premium Website </h3>
                                <p>Go with our featured service and get the best web development service you could ask for.</p>
                                
                                <Link href="/premium-website-package">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <h3 style={{"color":"white"}}>INCLUDED WITH OUR PREMIUM WEBSITE:</h3>
                        
                        <div className="wrapper">
                      
                       
                       <div className="col-lg-3 p-0">
                            <div className="single-features single-features2" >
                                <Image loading='lazy' src="/images/design1.png" alt="Website Design and development icon." width={320} height={240}/>
                                <h3>1) Design + Development</h3>
                                <p> Site Dominion ensures that that your website loads quickly, is safe, functions flawlessly across all browsers and screen sizes, and is set up for the long term to continuously reach your business goals.</p>

                                <Link href="/website-design-and-development">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 p-0">
                            <div className="single-features single-features2" >
                            <Image loading='lazy'  src="/images/blog.png"  alt="Blog-setup icon." width={320} height={220}/>
                                <h3>2) Blog Development + Setup</h3>
                                <p>Reach clients and search engines with skilled professionals' high-quality, budget friendly blog and website content. A straightforward solution to cover your blogging needs.</p>
                                
                                <Link href="/blog-creation">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span3" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 offset-lg-0 p-0">
                            <div className="single-features single-features2" >
                            <Image loading='lazy'  src="/images/optimization.png" className='service' alt="SEO setup icon." width={320} height={240}/>
                                <h3>3) Project Optimization</h3>
                                <p>We use SEO and tools, cutting-edge techniques, and experiments to enhance the functionality of your website, further attract more visitors, boost conversions, and increase revenue.</p>
                                
                                <Link href="/website-optimization">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 p-0">
                            <div className="single-features single-features2" >
                            <Image loading='lazy'  src="/images/deployment2.png" className='service' alt="Website deployment icon." width={360} height={280}/>
                                <h3>4) Full Deployment</h3>
                                <p>After the completion of the developmental phase, the website is pushed into deployment. Site Dominion's premium website package covers all domain and hosting expenses, so you don't have to break a sweat.</p>
                                
                                <Link href="/website-deployment">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                     
                        </div>
                       <hr />
                       <div className='wrapper2'>
                            <div>
                                Browse through our existing projects:
                                <br />
                            <Link href="/about-1">
                                <a className="default-btn2">
                                    View Projects
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
                            <div className="single-features" >
                            <Image loading='lazy'  src="/images/logomock.png" alt="Logo design icon." width={340} height={260}/>
                                <h3>Logo Design</h3>
                                <p>Our goal at Site Dominion is to make the best first impression possible for your brand. One of our design experts will assist you in bringing your brand to life once you reach out to us.</p>

                                <Link href="/logo-design">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features" >
                            <Image loading='lazy'  src="/images/blog.png" alt="Blog-setup icon." width={320} height={240}/>
                                <h3>Blog Development + Setup</h3>
                                <p>Reach clients and search engines with skilled professionals' high-quality, budget friendly blog and website content. A straightforward solution to cover your blogging needs.</p>
                                
                                <Link href="/blog-creation">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span3" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features"  >
                            <Image loading='lazy'  src="/images/content.png" alt="Content management icon." width={320} height={240}/>
                                
                                <h3>Website Copywriting</h3>
                                <p>Don't have time to manage the content on your website? Or maybe you're unsure about how to approach it. Let our professionals assist you with creating transformational SEO friendly content to fastrack the process.</p>
                                
                                <Link href="/website-content-writing">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Pick Service</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className='wrapper2'>
                            <div>
                            Full List of Services:
                                <br />
                            <Link href="/about-1">
                                <a className="default-btn2">
                                    All Services
                                </a>
                            </Link>
                            </div>
                            <div>
                                Check Out our Pricing Options:
                                <br />
                            <Link href="/services">
                            
                                <a className="default-btn1">
                                    Pricing
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