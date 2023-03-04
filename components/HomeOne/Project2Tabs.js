import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesTabs from './ServicesTabs';
import Portfolio1Content from '../ServiceDetails/Portfolio2Content'
import Link from 'next/link';
import Image from 'next/image';

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
                <Portfolio1Content/> 
              
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
              <div className="main-contact-area">
            <div className="container">
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Get Your FREE Quote</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-wrap contact-pages mb-0">
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="Name" 
                                                    className="form-control" 
                                                    value="text" 
                                                    
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="email" 
                                                    placeholder="Email" 
                                                    className="form-control" 
                                                    value="text" 
                                                   
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="number" 
                                                    placeholder="Phone number" 
                                                    className="form-control" 
                                                    value="text" 
                                                    
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="subject" 
                                                    placeholder="Subject" 
                                                    className="form-control" 
                                                    value="text" 
                                                    
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="text" 
                                                    cols="30" 
                                                    rows="6" 
                                                    placeholder="Write your message..." 
                                                    className="form-control" 
                                                    value="text" 
                                                   
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="default-btn btn-two">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;