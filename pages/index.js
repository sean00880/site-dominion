import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import TopSections2 from '../components/HomeOne/TopSections2'
import About from '../components/HomeOne/About'
import Services from '../components/HomeOne/Services'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'
import ServicesStyleFour from '../components/Services/ServicesStyleFour'
import Testimonials from '../components/Common/Testimonials'
import News from '../components/Common/News'
import Footer from '../components/Layouts/Footer'
import PartnerSlider from '../components/Common/PartnerSlider';
import Projects from '../components/HomeOne/Projects'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import GettingStarted from '../components/HomeOne/GettingStarted';
import dynamic from 'next/dynamic'
const CoreFeatures = dynamic(() => import( '../components/HomeOne/CoreFeatures'));
const Pricing = dynamic(() => import( '../components/HomeOne/Pricing'));

import Process from '../components/HomeOne/Process';
import WhyChooseUs from '../components/HomeThree/WhyChooseUs';

const Index = () => {
    return (
        <>
       
            <Navbar />
          
            <MainBanner />
            <PartnerSlider/>
            <TopSections2/>
            <CoreFeatures/>
            <Process />
            <Features />
            <WhyChooseUs />
            <Pricing/>                
            <ServicesStyleFour />
            <Projects />
            <News />
            <Testimonials />

     
            <Footer />
        </>
    )
}

export default Index