


import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import dynamic from 'next/dynamic'
const CoreFeatures = dynamic(() => import( '../components/HomeOne/CoreFeatures'));
const Pricing = dynamic(() => import( '../components/HomeOne/Pricing'));
const MainBanner = dynamic(() => import( '../components/HomeOne/MainBanner'));
const Navbar = dynamic(() => import( '../components/Layouts/Navbar'));
const Footer = dynamic(() => import( '../components/Layouts/Footer'));
const Projects = dynamic(() => import( '../components/HomeOne/Projects'));
const Features = dynamic(() => import( '../components/HomeOne/Features'));
const TopSections2 = dynamic(() => import( '../components/HomeOne/TopSections2'));
const Testimonials = dynamic(() => import( '../components/Common/Testimonials'));
const News = dynamic(() => import( '../components/Common/News'));
const PartnerSlider = dynamic(() => import( '../components/Common/PartnerSlider'));
const Process = dynamic(() => import( '../components/HomeOne/Process'));
const ServicesStyleFour = dynamic(() => import( '../components/Services/ServicesStyleFour'));
const WhyChooseUs = dynamic(() => import( '../components/HomeThree/WhyChooseUs'));

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