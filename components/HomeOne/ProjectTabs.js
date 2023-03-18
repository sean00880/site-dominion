import React, { Component } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Projects from './Projects'
import LiveProjects from './LiveProjects'
import PrototypeProjects from './PrototypeProjects'

class ServicesStyleOne extends Component {
    render() {
        return (
            <div className="features-area features-area-inner-style">
                <div className="container" style={{"borderRadius":"1vh 1vh 0 0"}}>
                <Tabs>
              <TabList>
              <a href="/getting-started" className="backButton" style={{"textAlign":"right", "position":"absolute","right":"6vh", "color":"white", "top":"-8ch"}}>
      Back To Guide
    </a>
                <Tab>Featured</Tab>
                <Tab>Live Projects</Tab>
                <Tab>Prototype Projects</Tab>
              </TabList>
              <div className="row">
              <TabPanel>
                
<Projects/>
              </TabPanel>
              <TabPanel>
                <LiveProjects/>
              </TabPanel>
              <TabPanel>
                <PrototypeProjects/>
              </TabPanel>
                    </div>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default ServicesStyleOne;