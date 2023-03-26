import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SetupTabs from '../components/HomeOne/SetupTabs';
import Footer from '../components/Layouts/Footer';
import { NextSeo } from 'next-seo';
class ServiceDetails extends Component {
    render() {
        return (
            <>
                <NextSeo title="Site Dominion | Website Deployment" />
                <Navbar />

                <PageBanner 
                    pageTitle="Full Website Deployment [w/ Domain + Hosting]" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Website Deployment" 
                /> 
                
                <SetupTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;