import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContentTabs from '../components/HomeOne/ContentTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Web Content Writing/Management" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Website Content Writing" 
                /> 
                
                <ContentTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;