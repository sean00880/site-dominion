import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import OptimizationTabs from '../components/HomeOne/OptimizationTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Full Website Optimization Service" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Website Optimization" 
                /> 
                
                <OptimizationTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;