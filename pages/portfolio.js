import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layouts/Footer';
import PortfolioTabs from '../components/HomeOne/PortfolioTabs';


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
            
                <PortfolioTabs />
                
                <Footer />
            </>
        );
    }
}

export default Services;