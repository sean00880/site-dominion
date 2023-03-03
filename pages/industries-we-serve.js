import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustryTabs from '../components/HomeOne/IndustryTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Industries We Work With" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Industries We Serve" 
                /> 
                
                <IndustryTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;