import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import AccordionServices from './AccordionServices'
import Link from 'next/link';
import QuoteRequest from './QuoteRequest'

class HomeAccordion extends Component {
    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="d-flex flex-column align-items-center w-100">
                    <div className="faq-img" data-aos="zoom-in" data-aos-delay="600">
                                <img src="/images/faq-img.png" alt="Site Dominion's home-accordion image."  />
                            </div>
                        <div className="col-lg-12">
                            <div className="faq-accordion">
                                <Accordion >
                                    <AccordionItem uuid="a" data-aos="flip-left" data-aos-duration="1200" data-aos-delay="100">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Step One: Browse Through Our Services   
                                                <img className='accordion__image' src="/images/browse.png" alt="browse" />                                            
                                            </AccordionItemButton>
                                            
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                           
                                        <div className="col-lg-12 step1"><p className="p-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                            <Link href="/services">
                                            <button type="submit" className="default-btn btn-two">
                                                Services
                                            </button>
                                            </Link></div>
                <div className="row" style={{"background":"none"}}><div className="col-lg-6 step1"><p className="p-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                            <Link href="/pricing">
                                            <button type="submit" className="default-btn btn-two">
                                                Pricing
                                            </button>
                                            </Link></div><div className="col-lg-6 step1"><p className="p-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                            <Link href="/portfolio">
                                            <button type="submit" className="default-btn btn-two">
                                                Projects
                                            </button>
                                            </Link></div></div>
                                   
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="200">
                                        <AccordionItemHeading>
                                            <AccordionItemButton >
                                             
                                                Step Two: Initiate Your FREE Quote Request  
                                                <img className='accordion__image2' src="/images/quote.png" alt="browse" />                                               
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                        <QuoteRequest/>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c" data-aos="flip-left" data-aos-duration="1200" data-aos-delay="300">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Three: We Work On Your Project
                                            <img className='accordion__image' src="/images/process.svg" alt="process" />
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d" data-aos="flip-right" data-aos-duration="1200" data-aos-delay="400">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Four: Complete Payment
                                            <img className='accordion__image3' src="/images/payment.svg" alt="process" />
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e"  data-aos="flip-left" data-aos-duration="1200" data-aos-delay="500">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Five: Website Deployment
                                            <img className='accordion__image' src="/images/browser.png" alt="browse" /> 
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

                            
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeAccordion;