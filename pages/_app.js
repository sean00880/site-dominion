import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "swiper/css";
import "swiper/css/bundle";
import { useRouter } from 'next/router';
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
        
        const siteUrl = 'https://www.sitedominion.com';
  const router = useRouter();
  const cleanPath = router.asPath.split('#')[0].split('?')[0];
  const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);

        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                <link rel="canonical" href={canonicalUrl} />
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
                    
                    <title>Lead Generating Websites for Businesses - https://www.sitedominion.com/</title>
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
