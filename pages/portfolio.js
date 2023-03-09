import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layouts/Footer';
import PortfolioTabs from '../components/HomeOne/PortfolioTabs';
import { NextSeo } from 'next-seo';

class Services extends Component {
    render() {
        return (
            <>
                <NextSeo title="Site Dominion | Portfolio" />
                <Navbar />

                <PageBanner 
                    pageTitle="Our Portfolio" 
                    homePageUrl="/portfolio" 
                    homePageText="www.sitedominion.com" 
                    activePageText="Projects" 
                /> 
            
                <PortfolioTabs />
                
                <Footer />
            </>
        );
    }
}

export default Services;