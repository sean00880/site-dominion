import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/AboutOne/About';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';
import AboutDetails from '../components/Common/AboutDetails';
import Testimonials from '../components/Common/Testimonials';
import PartnerSlider from '../components/Common/PartnerSlider';
import Footer from '../components/Layouts/Footer';

class About2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="About Style Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Style Two" 
                /> 

                <About />

                

                <AboutDetails />

                <WhyChooseUs />

                <Testimonials />

                <PartnerSlider />
                
                <Footer />
            </>
        );
    }
}

export default About2;