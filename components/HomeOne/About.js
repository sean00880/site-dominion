import Link from 'next/link';
import MakeYourBusiness from '../Common/MakeYourBusiness';
import GettingStarted from '../HomeOne/GettingStarted';
import CoreFeatures from '../HomeOne/CoreFeatures';
import Pricing from '../HomeOne/Pricing';
import Process from '../HomeOne/Process';
import WhyChooseUs from '../HomeThree/WhyChooseUs';

const About = () => {
    return (
        <section className="about-area" style={{"minHeight":"100vh", "justifyContent":"center", "display":"flex","flex-direction":"column", "padding":"3vh 0vh", "borderBottom":"2px solid #b64c4c"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="about-content">
                            <span>About Us</span>
                            <h2>We Create Premium High Converting Websites To Promote Lead Generation</h2>
                            <hr />
                            <p>According to WebFX, the average business in the US can expect to spend up to $100,000 on setting up and managing a website during its lifecycle. We offer professional feature-packed websites that include inherent SEO, unique UI & UX design, outstanding page loead speeds for a one time payment of as low as $599.</p>
                            
                            

                            <Link href="/about-1">
                                <a className="default-btn">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                        
                        <CoreFeatures/>
                        <Pricing/>
                        <Process />
                        <WhyChooseUs />

                </div>
            </div>
        </section>
    )
}

export default About