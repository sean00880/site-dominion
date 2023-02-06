import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Blog Development + Setup" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Development & Setup for Businesses" 
                /> 

                <ServiceDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;