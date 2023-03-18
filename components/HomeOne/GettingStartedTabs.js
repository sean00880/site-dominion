import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesTabs from './ServicesTabs';
import LogoContent from '../ServiceDetails/LogoContent'
import HomeAccordion from './HomeAccordion';
import WorkTab from '../HomeOne/WorkTab2';
import DeploymentTab from '../HomeOne/DeploymentTab';
import QuoteRequest from './QuoteRequest';
import PaymentTab from '../Pricing/PricingStyleTwo';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container">
                <Tabs defaultIndex={4}>
              <TabList style={{"borderRadius":"0"}}>
              <h2 style={{"color":"white","margin":"0","paddingTop":"2vh"}}>Follow Our 5-Step Guide</h2>
                    <hr style={{"color":"white"}}/>
                <Tab>Step #1: Pick a Service</Tab> 
                
                
              </TabList>
              <div className="row" style={{"borderRadius":"0", "background":"white"}}>
              
                <TabPanel className="d-flex flex-column">
                    
                <div className="col-lg-12 "><p className="p-3">
                With a team of experienced developers, designers, and digital marketing experts, we offer a range of services to help our clients establish a strong online presence and grow their businesses.   
                                            </p>
                                            <Link href="/services">
                                            <button type="submit" className="default-btn btn-two">
                                                Services
                                            </button>
                                            </Link></div>
                <div className="row" style={{"background":"none"}}>
                    <div className="col-lg-12"><p className="p-3">
                                            We have worked with clients from various industries and niches, providing them with tailored websites and applications that not only meet their needs but also exceed their expectations. We also specialize in creating high-quality prototype projects that bring our clients' ideas to life. Check out our work.
                                            </p>
                                            <Link href="/portfolio">
                                            <button type="submit" className="default-btn btn-two">
                                                Projects
                                            </button>
                                            </Link></div></div>
                                            
                </TabPanel>
                
              
              

                    </div>
                    </Tabs>

                    <Tabs>
<TabList style={{"borderRadius":"0", "padding":"3vh 0"}}>
                
                <Tab>Step #2: Initiate Your FREE Quote Request
</Tab>
                
</TabList>
<div className="row" style={{"borderRadius":"0", "padding":"1vh"}}>
    <TabPanel style={{"padding":"0"}} id="quote-request2" >
    <QuoteRequest/>
    </TabPanel>
</div>
                    </Tabs>
                    <Tabs style={{"borderRadius":"0vh 0vh", "padding":"0"}}>
                        <TabList style={{"borderRadius":"0vh 0vh" , "padding":"3vh 0"}}>
                        <Tab>Step #3: We Work On Your Project</Tab>
                <Tab>
</Tab>
                        </TabList>
                        <div className="row" style={{"borderRadius":"0vh"}}>
                            <TabPanel  style={{"padding":"0"}}>

<WorkTab/>
                            </TabPanel>
                        </div>
                    </Tabs>
                    <Tabs>
<TabList style={{"borderRadius":"0vh 0vh", "padding":"3vh 0"}}>
                <Tab>Step #4: Complete Payment
</Tab>
                
</TabList>
<div className="row" style={{"borderRadius":"0", "padding":"1vh","background":"#1d1c1c"}}>
    <TabPanel style={{"padding":"0"}} >
    <PaymentTab/>
    </TabPanel>
</div>
                    </Tabs>
                    <Tabs style={{"borderRadius":"0vh 0vh", "padding":"0"}}>
                        <TabList style={{"borderRadius":"0vh 0vh" , "padding":"3vh 0"}}>
                        <Tab>Step #5: Project Deployed</Tab>
                        </TabList>
                        <div className="row" style={{"borderRadius":"0vh 0vh 1vh 1vh", "background":"none"}}>
                            <TabPanel  style={{"padding":"0"}}>

                            <DeploymentTab/>
                            </TabPanel>
                            
                        </div>
                    </Tabs>
                    
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;