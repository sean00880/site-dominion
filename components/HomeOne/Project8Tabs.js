import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesTabs from './ServicesTabs';
import Portfolio1Content from '../ServiceDetails/Portfolio1Content'
import Portfolio8Content from '../ServiceDetails/Portfolio8Content'
import Link from 'next/link';
import Image from 'next/image';
import QuoteRequest from './QuoteRequest';
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
                            <Tab>Project Overview</Tab>
                        
                          
                        </TabList>
                            <a href="/portfolio" className='portfolio_back' style={{'display':'flex','flexDirection':'column','textAlign':'right'}}> &lt;&#45; Back To Projects</a>
                    </Tabs>
                <Portfolio8Content/> 
              
                <Tabs defaultIndex={1}>
              <TabList style={{"borderRadius":"0"}}>
                <Tab>Step #1: Pick a Service</Tab>
                <Tab>Step #2: Initiate Your FREE Quote Request
</Tab>
                <Tab>Step #3: We Work On Your Project</Tab>
                <br />
                <Tab>Step #4: Complete Payment</Tab>
                <Tab>Step #5: Project Deployed
</Tab>

              </TabList>
              <div className="row" style={{"borderRadius":"0"}}>
              <TabPanel>
                <ServicesTabs/> 
              
              </TabPanel>
              </div>
              <TabPanel>                                        
                            <QuoteRequest/>  
                        </TabPanel>
                        <TabPanel><WorkTab/></TabPanel>
                        <TabPanel><PaymentTab/></TabPanel>
                        <TabPanel><DeploymentTab/></TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;