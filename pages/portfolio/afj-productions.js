import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Project4Tabs from '../../components/HomeOne/Project7Tabs';
import Footer from '../../components/Layouts/Footer';

class DesignationDump extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="A Film Junkie Productions - Video Production Studio Website" 
                    homePageUrl="/" 
                    homePageText="sitedominion.com" 
                    activePageText="portfolio/afj-productions" 
                /> 
                
                <Project4Tabs />
                
                <Footer />
            </>
        );
    }
}

export default DesignationDump;