import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Project4Tabs from '../../components/HomeOne/Project4Tabs';
import Footer from '../../components/Layouts/Footer';

class DesignationDump extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Grandpa Ron's LLC - Landscaping Business in Columbus, Ohio" 
                    homePageUrl="/" 
                    homePageText="sitedominion.com" 
                    activePageText="portfolio/designation-dump-llc" 
                /> 
                
                <Project4Tabs />
                
                <Footer />
            </>
        );
    }
}

export default DesignationDump;