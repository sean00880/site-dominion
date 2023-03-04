import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectTabs from './ProjectTabs3';
import ServicesTabs from './ServicesTabs';
import QuoteRequest from './QuoteRequest';
import PaymentTab from './PaymentTab';
import WorkTab from './WorkTab2';
import DeploymentTab from './DeploymentTab';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style">
                <div className="container">
                <ProjectTabs/>
                    <Tabs  defaultIndex={1}>
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
                        <TabPanel className='tab' style={{"borderRadius":"0"}}><ServicesTabs/></TabPanel>
                        <TabPanel>                                        <div className="main-contact-area">
            <QuoteRequest/>
        </div></TabPanel>
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