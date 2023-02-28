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
                    pageTitle="Logo Design" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Site Dominion Elite Website Package" 
                /> 
                
                <PackageTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;