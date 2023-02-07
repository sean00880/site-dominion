import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioTabs from '../components/HomeOne/PortfolioTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Logo Design" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Professional Logo Design for Businesses" 
                /> 
                
                <PortfolioTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;