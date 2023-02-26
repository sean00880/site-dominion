import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogTabs from '../components/HomeOne/BlogTabs';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Blog Development + Setup" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Development & Setup Services" 
                /> 
                
                <BlogTabs />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;