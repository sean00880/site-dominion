import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PackageTabs from '../components/HomeOne/PackageTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="All-In-One Website Package" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Site Dominion Premium Website Package" 
                /> 
                
                <PackageTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;