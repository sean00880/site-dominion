import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layouts/Footer';
import ServicesTabs from '../components/HomeOne/ServicesTabs2';


class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Our Services" 
                    homePageUrl="/services" 
                    homePageText="www.sitedominion.com" 
                    activePageText="Services" 
                /> 
            
                <ServicesTabs />
                
                <Footer />
            </>
        );
    }
}

export default Services;