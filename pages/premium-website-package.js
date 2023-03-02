import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PremiumTabs from '../components/HomeOne/PremiumTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="All-In-One Premium Website Package" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Site Dominion Premium Website Package" 
                /> 
                
                <PremiumTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;