import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Project1Tabs from '../../components/HomeOne/Project1Tabs';
import Footer from '../../components/Layouts/Footer';

class DecodedWeb extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Decoded Web - Website Development" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Portfolio" 
                /> 
                
                <Project1Tabs />
                
                <Footer />
            </>
        );
    }
}

export default DecodedWeb;