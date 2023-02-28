import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContentTabs from '../components/HomeOne/ContentTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Logo Design" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Site Dominion Elite Website Package" 
                /> 
                
                <ContentTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;