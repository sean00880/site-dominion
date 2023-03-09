import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';
import PricingTabs from '../components/HomeOne/PricingTabs';
import { NextSeo } from 'next-seo';
class Pricing extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Pricing" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Pricing" 
                /> 
                <NextSeo title="Site Dominion | Pricing" />
                <PricingTabs/>
                
                <Footer />
            </>
        );
    }
}

export default Pricing;