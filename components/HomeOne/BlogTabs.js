import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesTabs from './ServicesTabs';
import BlogContent from '../ServiceDetails/BlogContent'
import WorkTab from './WorkTab';
import QuoteRequest from './QuoteRequest';
import ServiceSidebar from '../ServiceDetails/ServiceSidebar';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container" style={{"padding":"0"}}>
                <BlogContent/> 
              
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
              <TabPanel id="quote">
              <QuoteRequest/> 
                    </TabPanel>
                    <TabPanel>
                        <WorkTab/>
                    </TabPanel>
                    </Tabs>
                </div>
                
            </section>
        );
    }
}

export default ServicesStyleOne;