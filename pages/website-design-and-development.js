import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WebTabs from '../components/HomeOne/WebTabs';
import Footer from '../components/Layouts/Footer';
import { NextSeo } from 'next-seo';
class ServiceDetails extends Component {
    render() {
        return (
            <>
                <NextSeo title="Site Dominion | Website Design And Development" />
                <Navbar />

                <PageBanner 
                    pageTitle="SEO-friendly Web Design & Development" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Website Design & Development" 
                /> 
                
                <WebTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;