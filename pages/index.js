


import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import dynamic from 'next/dynamic'
const CoreFeatures = dynamic(() => import( '../components/HomeOne/CoreFeatures'));
const Pricing = dynamic(() => import( '../components/HomeOne/Pricing'));
const MainBanner = dynamic(() => import( '../components/HomeOne/MainBanner'));
const Navbar = dynamic(() => import( '../components/Layouts/Navbar'));
const Footer = dynamic(() => import( '../components/Layouts/Footer'));
const Footer2 = dynamic(() => import( '../components/Layouts/Footer2'));
const Projects = dynamic(() => import( '../components/HomeOne/Projects'));
const Features = dynamic(() => import( '../components/HomeOne/Features'));
const TopSections2 = dynamic(() => import( '../components/HomeOne/TopSections2'));
const Testimonials = dynamic(() => import( '../components/Common/Testimonials'));
const Blog = dynamic(() => import( '../components/HomeOne/Blog'));
const PartnerSlider = dynamic(() => import( '../components/Common/PartnerSlider'));
const Process = dynamic(() => import( '../components/HomeOne/Process'));
const ServicesStyleFour = dynamic(() => import( '../components/Services/ServicesStyleFour'));
const WhyChooseUs = dynamic(() => import( '../components/HomeThree/WhyChooseUs'));
import { NextSeo } from 'next-seo';
import { data } from "../data";



export default function Index({ posts }) {
    return (
        <>
            <NextSeo title="Site Dominion | Lead Generating Website Development" canonical="https://www.sitedominion.com"/>
            <Navbar />
          
            <MainBanner />
            <PartnerSlider/>
            <TopSections2/>
            <CoreFeatures/>
            <Process />
            <Features />
            <WhyChooseUs />
            <Pricing/>  
            <Projects />              
            <ServicesStyleFour />
            
            <Testimonials/>  
            <Blog posts={posts}/>
            <Footer2/>
            <Footer />
           
        </>
    )
}

export const getStaticProps = () => {
    const posts = data;
    return {
      props: { posts },
    };
  };

