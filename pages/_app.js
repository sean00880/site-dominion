import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import '../styles/style.css';
import '../styles/responsive.css';
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

import Script from 'next/script';


export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    
    
    render () {
        
        
        
        const { Component, pageProps } = this.props
        
        
        return (
            <>
                <Head>
                <Script
        src="https://www.googletagmanager.com/gtag/js?id=NEXT_PUBLIC_GOOGLE_ANALYTICS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'NEXT_PUBLIC_GOOGLE_ANALYTICS');
        `}
      </Script>
                    <meta 
                        name="viewport" 
                        content="width=device-width, initial-scale=1" 
                    />
                    <link rel="canonical" href="https://www.sitedominion.com" />
                    <title>Lead Generating Websites for Businesses - https://www.sitedominion.com/</title>
                    <meta
          name="description"
          content="At Site Dominion, we believe that a website is more than just an online presence as it's an extension of your brand and a tool to drive growth and revenue. That's why we offer comprehensive web development services to help businesses of all sizes achieve their online goals."
          key="desc"
        />
        <meta
          property="og:description"
          content="Looking for a professional web development agency to take your online presence to the next level? Look no further! Our team of experienced developers can help you create a stunning website that not only looks great but also delivers results."
        />
        <meta property="og:image" content="/images/mockup.png" />
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </>
        );
    }
}
