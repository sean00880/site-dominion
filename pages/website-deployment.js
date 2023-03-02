import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SetupTabs from '../components/HomeOne/SetupTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="SEO-friendly Web Design & Development" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Website Design & Development" 
                /> 
                
                <SetupTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;