import Link from 'next/link'
import GettingStarted from '../HomeOne/GettingStarted';
import WhyChooseUs from '../HomeThree/WhyChooseUs';

const Features = () => {
        return (
            <section className="features-area" style={{"borderBottom":"2px solid #9d9d9d6e"}}>
                
                <div className="container">
                    <div className="row">
                
                <hr />
                        <h1>Site Dominion Premium Website Package</h1>
                <h3 style={{"color":"#f0ecec"}}>Go with Site Dominion's featured all-in-one website package. We handle everything for you, from design to developement, hosting, deployment and optimization.</h3>    
                <h3>Our three step process:</h3>                   
                        <div className="wrapper">
                       
                       
                       <div className="col-lg-4 p-0 column">
                            <div className="single-features">
                                <i role="none" className="flaticon-cloud-computing-1"></i>
                                <h3>1) Design + Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-0">
                            <div className="single-features">
                                <i role="none" className="flaticon-engineer"></i>
                                <h3>2) Full Deployment </h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-0 p-0">
                            <div className="single-features">
                                <i role="none" className="flaticon-success"></i>
                                <h3>3) Project Optimization</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow span2" role="presentation">Learn More</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                       
                        </div>
                        <h3>Getting Started:</h3> 
                \
                       <hr />
                       <div className='wrapper2'>
                            <div>
                                Check out our existing clients' projects:
                                <br />
                            <Link href="/about-1">
                                <a className="default-btn2">
                                    View Live Projects
                                </a>
                            </Link>
                            </div>
                            
                        </div>
                        
                        <WhyChooseUs />
                    </div>
                </div>
            </section>
        )
}

export default Features;