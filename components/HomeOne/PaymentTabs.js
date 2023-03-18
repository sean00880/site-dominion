import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectTabs from './ProjectTabs';
import ServicesTabs from './ServicesTabs';
import QuoteRequest from './QuoteRequest'
import PaymentAccordion2 from "./PaymentAccordion2";
import Image from 'next/image'; 
import PaymentTab from './PaymentTab';
import WorkTab from './WorkTab2';
import DeploymentTab from './DeploymentTab';
class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container">
                <Tabs>
              <TabList>
              <a href="/getting-started" className="backButton" style={{"textAlign":"right", "position":"absolute","right":"6vh", "color":"white", "top":"-8ch"}}>
      Go Back
    </a>
                

              </TabList>
              <div className="row" style={{"borderRadius":"0"}}>
              <TabPanel>
              <div className="pp-expertise-area process">
        <div className="container">
          <div style={{"background":"linear-gradient(45deg, rgb(47 94 112), rgb(51 52 57), rgb(36 95 117))"}} className="section-title style-two">
          
                        <div className="about-img">
                            <img loading="lazy"   src="/images/venmo-logo.png" alt="Site Dominion | Web Design Process Desktop Display" className="homeImage" />
                        </div>
                   
            <h2 style={{"color":"white"}}>for Business</h2>
            <hr style={{"color":"white"}}/>
            <h4>Site Dominion's promise is to produce and deliver websites of the highest caliber in order to provide direct value to businesses accross the globe.</h4>
          </div>

          <div className="row justify-content-center">
            <PaymentAccordion2/>
          </div>
        </div>
      </div>
              </TabPanel>
              </div>
                    </Tabs>
                    <Tabs>
                        <TabList style={{"borderRadius":"0"}}>
                        <Tab>Step #1: Pick A Service</Tab>
                        <Tab>Step #2: Initiate Your FREE Quote Request
</Tab>
                <Tab>Step #3: We Work On Your Project</Tab>
                <br />
                <Tab>Step #4: Complete Payment</Tab>
                <Tab>Step #5: Project Deployed
</Tab>
                        </TabList>
                        <TabPanel><ServicesTabs/></TabPanel>
                        <TabPanel>                                        
                            <QuoteRequest/>
                        </TabPanel>
                        <TabPanel>
                            <WorkTab/>
                        </TabPanel>
                        <TabPanel><PaymentTab/></TabPanel>
                        <TabPanel><DeploymentTab/></TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;