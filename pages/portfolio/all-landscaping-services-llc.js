import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Project2Tabs from '../../components/HomeOne/Project2Tabs';
import Footer from '../../components/Layouts/Footer';

class DecodedWeb extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="All Landscaping Services LLC" 
                    homePageUrl="/" 
                    homePageText="sitedominion.com" 
                    activePageText="portfolio/all-landscaping-services-llc" 
                /> 
                
                <Project2Tabs />
                
                <Footer />
            </>
        );
    }
}

export default DecodedWeb;