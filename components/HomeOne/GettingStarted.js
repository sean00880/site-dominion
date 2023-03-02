import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import Features2 from './Features'

class GettingStarted extends Component {
    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="d-flex flex-column align-items-center">
                        <div className="col-lg-12">
                            <div className="faq-accordion">
                                <Accordion preExpanded={['b']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Step One: Browse Through Our Services
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <Features2/>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b" >
                                        <AccordionItemHeading>
                                            <AccordionItemButton id="start">
                                                Step Two: Initiate Your FREE Quote Request

                                                
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
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
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Three: We Work On Your Project
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d" >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Four: Complete Payment
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Five: Website Deployment
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="faq-img">
                                <Image loading="lazy"  height={100} width={100}  src="/images/faq-img.png"  alt="Site Dominion's 'getting-started' page image." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GettingStarted;