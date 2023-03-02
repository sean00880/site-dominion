import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesTabs from './ServicesTabs';
import WorkTab from './WorkTab2';
import GoBack from './GoBack';
import QuoteRequest from './QuoteRequest';
import PaymentTab from './PaymentTab';
class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container" style={{"borderRadius":"1vh"}}>
                <Tabs>
              <TabList><a href="/getting-started" className="backButton" style={{"textAlign":"right", "position":"absolute","right":"6vh", "color":"white"}}>
      Go Back
    </a>
                <Tab style={{"position":"relative"}}>Step #1: Pick A Service</Tab>
                

              </TabList>
              <div className="row" style={{"borderRadius":"0"}}>
              <TabPanel>
                <ServicesTabs className="tabs"/>  
              
              </TabPanel>
              </div>
                    </Tabs>
                    <Tabs>
                        <TabList style={{"borderRadius":"0"}}>
                        <Tab>Step #2: Initiate Your FREE Quote Request
</Tab>
                <Tab>Step #3: We Work On Your Project</Tab>
                <br />
                <Tab>Step #4: Complete Payment</Tab>
                <Tab>Step #5: Project Deployed
</Tab>
                        </TabList>
                        <TabPanel>                                        
                            <QuoteRequest/>  
                        </TabPanel>
                        <TabPanel><WorkTab/></TabPanel>
                        <TabPanel><PaymentTab/></TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;