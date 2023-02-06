import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';

import Footer from '../components/Layouts/Footer';
import GettingStarted from '../components/HomeOne/GettingStarted'

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
                <GettingStarted />
                
                <Footer />
            </>
        );
    }
}

export default About1;