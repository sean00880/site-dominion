import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import TopSections from '../components/HomeOne/TopSections'
import About from '../components/HomeOne/About'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'
import ServicesStyleFour from '../components/Services/ServicesStyleFour'
import Testimonials from '../components/Common/Testimonials'
import News from '../components/Common/News'
import Footer from '../components/Layouts/Footer'
import PartnerSlider from '../components/Common/PartnerSlider';
import Projects from '../components/HomeOne/Projects'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
const Index = () => {
    return (
        <>
            <Navbar />
            
            <MainBanner />
            <PartnerSlider/>
            <TopSections/>
            <About />
            <Features />
                
            

            <ServicesStyleFour />
            <Projects />
            <News />
            <Testimonials />

        
            
            <Footer />
        </>
    )
}

export default Index