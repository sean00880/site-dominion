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
import { DefaultSeo } from "next-seo";
import Script from 'next/script';
import { useRouter } from "next/router";
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);
  const router = useRouter();
  const canonicalUrl = (`https://www.sitedominion.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
 

  return (
    <>
                  <DefaultSeo
        title="Site Domininon - Web Development Services"
        titleTemplate="Site Dominion - Web Development Services"
        defaultTitle="Site Dominion - Web Development Services"
        description="Looking for a lead generating website agency that can help you increase your online presence and drive more traffic to your business? Look no further than Site Dominion's expert team of website developers and digital marketing specialists."
        canonical={canonicalUrl}
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

          gtag('config', 'G-LYS6SMLR0H');
        `}
        
      </Script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      
            </Head>
            <Component {...pageProps} />
    </>
  );
}

export default MyApp;

//AfG_7vM6H4oA6M6jg1XF6b7M5Y7z08kAsNYFiNlP8PyL_Fb5pV7zdvVnfzBoIU0ncgSSRR0xxBxRwLw8