import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import QuoteRequest from '../components/HomeOne/QuoteRequest';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Contact Style One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact Style One" 
                /> 

                        <ContactInfo />

                        <QuoteRequest />
                
                <Footer />
            </>
        );
    }
}

export default Contact;