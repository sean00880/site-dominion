import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesTabs from './ServicesTabs';
import OptimizationContent from '../ServiceDetails/OptimizationContent'
import QuoteRequest from './QuoteRequest'
import WorkTab from './WorkTab2'
import PaymentTab from './PaymentTab'
import DeploymentTab from './DeploymentTab'

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container">
                <OptimizationContent/> 
              
                <Tabs defaultIndex={1}>
              <TabList style={{'borderRadius':'0'}}>
                <Tab>Step #1: Pick a Service</Tab>
                <Tab>Step #2: Initiate Your FREE Quote Request
</Tab>
                <Tab>Step #3: We Work On Your Project</Tab>
                <br />
                <Tab>Step #4: Complete Payment</Tab>
                <Tab>Step #5: Project Deployed
</Tab>

              </TabList>
              <div className="row" style={{'borderRadius':'0'}}>
              <TabPanel>
                <ServicesTabs/> 
              
              </TabPanel>
              </div>
              <TabPanel>
              <QuoteRequest/>
                    </TabPanel>
                <TabPanel>
                    <WorkTab/>        
                </TabPanel>
                <TabPanel>
                    <PaymentTab/>
                </TabPanel>
                <TabPanel>
                    <DeploymentTab/>
                </TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;