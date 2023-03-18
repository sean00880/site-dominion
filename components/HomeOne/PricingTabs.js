import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectTabs from './ProjectTabs';
import ServicesTabs from './ServicesTabs';
import PricingStyleOne from '../Pricing/PricingStyleOne';
import QuoteRequest from './QuoteRequest';
import WorkTab from './WorkTab2';
import PaymentTab from './PaymentTab';
import DeploymentTab from './DeploymentTab';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container">
                <Tabs>
              <TabList>
              <a href="/getting-started" className="backButton" style={{"textAlign":"right", "position":"absolute","right":"6vh", "color":"white", top:"-8ch"}}>
      Go Back
    </a>
                

              </TabList>
              <div className="row" style={{"borderRadius":"0"}}>
              <TabPanel>
                <PricingStyleOne/>  
              
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