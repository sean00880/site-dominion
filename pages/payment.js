import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';
import PaymentTabs from '../components/HomeOne/PaymentTabs';
import { NextSeo } from 'next-seo';
class Pricing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <NextSeo title="Site Dominion | Payments" />
                <PageBanner 
                    pageTitle="Pricing" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Pricing" 
                /> 
                
                <PaymentTabs/>
                
                <Footer />
            </>
        );
    }
}

export default Pricing;