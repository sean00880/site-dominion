import Link from 'next/link'

const Services = () => {
    
    return (
        <section className="offer-area">
            <div className="container">
                <div className="section-title">
                    <h1>Our Professional Services For You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure architecto quaerat eaque sapiente accusantium ad ut explicabo consequuntur fuga quidem? Sint.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i role="none" className="flaticon-chip"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Robotics & Drones</a>
                                </Link>
                            </h3>
                            <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i role="none" className="flaticon-vr"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Virtually Reality</a>
                                </Link>
                            </h3>
                            <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i role="none" className="flaticon-blockchain"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Blockchain Project</a>
                                </Link>
                            </h3>
                            <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i role="none" className="flaticon-target"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Image Processing</a>
                                </Link>
                            </h3>
                            <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i role="none" className="flaticon-choice"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Order Management</a>
                                </Link>
                            </h3>
                            <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i role="none" className="flaticon-deep-learning"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Machine Learning</a>
                                </Link>
                            </h3>
                            <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="offer-shape">
                <Image loading="lazy"  height={100} width={100}  src="/images/shape/services-shape/1.png" alt="Image" />
                <Image loading="lazy"  height={100} width={100}  src="/images/shape/services-shape/2.png" alt="Image" />
                <Image loading="lazy"  height={100} width={100}  src="/images/shape/services-shape/3.png" alt="Image" />
                <Image loading="lazy"  height={100} width={100}  src="/images/shape/services-shape/4.png" alt="Image" />
                <Image loading="lazy"  height={100} width={100}  src="/images/shape/services-shape/5.png" alt="Image" />
                <Image loading="lazy"  height={100} width={100}  src="/images/shape/services-shape/6.png" alt="Image" />
            </div>
        </section>
    )
}

export default Services;