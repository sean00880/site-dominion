import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Project2Tabs from '../../components/HomeOne/Project3Tabs';
import Footer from '../../components/Layouts/Footer';

class DesignationDump extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Designation Dump LLC - Junk Removal Business in Columbus, Ohio" 
                    homePageUrl="/" 
                    homePageText="sitedominion.com" 
                    activePageText="portfolio/designation-dump-llc" 
                /> 
                
                <Project2Tabs />
                
                <Footer />
            </>
        );
    }
}

export default DesignationDump;