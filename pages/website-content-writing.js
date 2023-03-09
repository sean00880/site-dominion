import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContentTabs from '../components/HomeOne/ContentTabs';
import Footer from '../components/Layouts/Footer';
import { NextSeo } from 'next-seo';
class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                <NextSeo title="Site Dominion | Website Content Copyrighting" />
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