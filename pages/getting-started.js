import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';

import Footer from '../components/Layouts/Footer';
import GettingStartedTabs from '../components/HomeOne/GettingStartedTabs'

class About1 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="All-In-One Website" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Featured Service" 
                /> 
                <GettingStartedTabs />
                
                <Footer />
            </>
        );
    }
}

export default About1;