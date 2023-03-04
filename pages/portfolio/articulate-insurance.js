import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Project4Tabs from '../../components/HomeOne/Project6Tabs';
import Footer from '../../components/Layouts/Footer';

class DesignationDump extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Articulate Insurance - Insurance Agency Prototype Project" 
                    homePageUrl="/" 
                    homePageText="sitedominion.com" 
                    activePageText="portfolio/greenpower-landscaping" 
                /> 
                
                <Project4Tabs />
                
                <Footer />
            </>
        );
    }
}

export default DesignationDump;