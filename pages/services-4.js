import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleFour from '../components/Services/ServicesStyleFour';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';

class Services4 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Industries We Serve" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Industries Served" 
                /> 
                <ServicesStyleFour />

                <MakeYourBusiness />
                
                <Footer />
            </>
        );
    }
}

export default Services4;