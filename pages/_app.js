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
import { NextSeo } from "next-seo";
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
                <NextSeo
        title="Site Domininon - Web Development Services"
        titleTemplate="Site Domininon - Web Development Services"
        defaultTitle="Site Domininon - Web Development Services"
        description="Looking for a lead generating website agency that can help you increase your online presence and drive more traffic to your business? Look no further than Site Dominion's expert team of website developers and digital marketing specialists."
        canonical="https://www.sitedominion.com/"
        openGraph={{
          url: "https://www.sitedominion.com/",
          title: "Site Dominion - Web Development Services",
          description: "Looking for a lead generating website agency that can help you increase your online presence and drive more traffic to your business? Look no further than Site Dominion's expert team of website developers and digital marketing specialists.",
          images: [
            {
              url: "/images/lion4.png",
              width: 270,
              height: 280,
              alt: "Site Dominion - Lion Logo",
            },
          ],
        }}
        twitter={{
          handle: "@sitedominion",
          site: "@sitedominion",
          cardType: "summary_large_image",
        }}
       
      />
            <Head>
            <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'NEXT_PUBLIC_GOOGLE_ANALYTICS');
        `}
      </Script>
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


