import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class ServicesStyleFour extends Component {
    render() {
        return (
            <section className="industries-serve-area">
                <div className="container">
                    <div className="section-title">
                        <h2 style={{"textAlign":"center"}}>Industries We Serve</h2>
                        <hr />
                        <h4>As a leading web development agency, we are dedicated to providing customized solutions to help businesses of all industries and sizes grow online. </h4>
                    </div>

                    <div className="row align-items-center" >
                        <div className="col-lg-4">
                            <div className="row" style={{"borderRadius":"1vh"}}>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none"><Image src='/images/automotive1.png' width={50} height={50} alt="automotive icon"/></i>
                                        <h3>Automotive & Transportation</h3>
                                        <span>Car manufacturing,
Commercial vehicles manufacturing,
Automotive parts manufacturing,
Automotive dealership and sales,
Transportation and logistics services</span>

                                        <Link href="/industries-we-serve/#automotive">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none"><Image src='/images/sports.png' width={50} height={50} alt="sports icon"/></i>
                                        <h3>Sports & Fitness</h3>
                                        <span>Sports betting,
Sponsorship and endorsements,
Sports media and broadcasting,
Sports facility management and operations,
Sports equipment manufacturing and sales,
Sports analytics and data management,
Sports event management and production,
Sports investment and finance,
Fitness and wellness centers, 
Esports </span>

                                        <Link href="/industries-we-serve/#sports">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                        <i role="none"><Image src='/images/lawncare.png' width={50} height={50} alt="lawncare icon"/></i>
                                        <h3>Landscaping & Lawncare</h3>
                                        <span>Residential and Commercial Landscaping, Landscape Design and Installation, Irrigation Systems Installation, Hardscaping and Outdoor Living Spaces, Tree and Shrub Care,
Landscape Lighting Design and Installation,
Lawn and Landscape Pest Control,
Snow and Ice Removal Services.




</span>

                                        <Link href="/industries-we-serve/#landscaping">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries">
                                    <i role="none"><Image src='/images/insurance.png' width={50} height={50} alt="insurance icon"/></i>
                                        <h3>Insurance & Finance</h3>
                                        <span>Life, Health, Property, Auto, Home & Business insurance, Investment management, Banking and financial services</span>

                                        <Link href="/industries-we-serve/#insurance">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation"> </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    
                        <div className="col-lg-4 industry">
                            
                            <div className="industries-img">
                                <Image loading="lazy"  height={100} width={100}  src="/images/industry.webp" alt="Industry image." />
                            </div>
                            At Site Dominion, we specialize in providing high-quality web development services to a wide range of industries. Our team of experienced developers, designers, and digital marketers work closely with clients to understand their unique needs and deliver custom solutions that help them achieve their business objectives. Whether you're in healthcare, finance, e-commerce, education, or any other industry, we have the expertise and tools to create a website or web application that's tailored to your specific requirements. Our goal is to help you leverage the power of the internet to improve your online presence, attract more customers, and grow your business.
                            <hr />
                            <Link href="/industries-we-serve">
                                <a className="default-btn2">
                                    More Info
                                </a>
                            </Link>
                        </div>

                        

                        <div className="col-lg-4">
                            <div className="row" style={{"borderRadius":"1vh"}}>

                            <div className="col-lg-12 col-md-6 right-item">
                                    <div className="single-industries">
                                        <i role="none"><Image src='/images/construction.png' alt="construction icon" width={50} height={50}/></i>
                                        <h3>Construction & Trade Work</h3>
                                        <span>Construction, Electrical contracting,
Plumbing and heating,
Carpentry and woodworking,
Masonry and stonework,
Painting and decorating</span>

                                        <Link href="/industries-we-serve/#construction">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation"> </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none"><Image src='/images/entertainment.png' alt="entertainment icon" width={50} height={50}/></i>
                                        <h3>Entertainment</h3>
                                        <span>Film Production,
Music Production,
Television Broadcasting,
Video Game Development,
Live Performance Production (e.g. concerts, theater, comedy shows)</span>

                                        <Link href="/industries-we-serve/#entertainment">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation"> </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none"><Image src='/images/realestate.png' alt="realestate icon" width={50} height={50}/></i>
                                        <h3>Real Estate</h3>
                                        <span>Residential real estate,
Commercial real estate,
Property management,
Real estate development,
Real estate finance</span>

                                        <Link href="/industries-we-serve/#realestate">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none"><Image src='/images/homeservices.png' alt="home services icon" width={50} height={50}/></i>
                                        <h3>Home Services</h3>
                                        <span>Cleaning services,
Pest control services,
Plumbing services,
HVAC (heating, ventilation, and air conditioning) services</span>

                                        <Link href="/industries-we-serve/#homeservices">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none"><Image src='/images/lawfirm.png' alt="law firm icon" width={50} height={50}/></i>
                                        <h3>Law Firms</h3>
                                        <span>Corporate Law,
Criminal Law,
Family Law,
Intellectual Property Law,
Environmental Law</span>

                                        <Link href="/industries-we-serve/#law">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-industries right-item">
                                        <i role="none" className="flaticon-blockchain"></i>
                                        <h3>Other</h3>
                                        <span>All other industries</span>

                                        <Link href="/industries-we-serve/#other">
                                            <a className="right-icon">
                                                <span className="bx bx-chevrons-right" role="presentation" > </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesStyleFour;