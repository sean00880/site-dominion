import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ServicesStyleOne from '../../components/Services/ServicesStyleOne';
import Footer from '../../components/Layouts/Footer';
import PortfolioTabs from '../../components/HomeOne/PortfolioTabs2';


class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Our Live Projects" 
                    homePageUrl="/portfolio/live-projects" 
                    homePageText="www.sitedominion.com" 
                    activePageText="Live Projects" 
                /> 
            
                <PortfolioTabs />
                
                <Footer />
            </>
        );
    }
}

export default Services;