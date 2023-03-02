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
                    <div className="faq-img" data-aos="zoom-in">
                                <img src="/images/faq-img.png" alt="Site Dominion's home-accordion image."  />
                            </div>
                        <div className="col-lg-12">
                            <div className="faq-accordion">
                                <Accordion >
                                    <AccordionItem uuid="a" data-aos="zoom-in-left"  data-aos-delay="100">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Step One: Browse Through Our Services   
                                                <img className='accordion__image5' src="/images/browse.png" alt="browse" />                                            
                                            </AccordionItemButton>
                                            
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                           
                                        <div className="col-lg-12 step1"><p className="p-3">
                                        With a team of experienced developers, designers, and digital marketing experts, we offer a range of services to help our clients establish a strong online presence and grow their businesses.
                                            </p>
                                            <Link href="/services">
                                            <button type="submit" className="default-btn btn-two">
                                                Services
                                            </button>
                                            </Link></div>
                <div className="row" style={{"background":"none"}}><div className="col-lg-6 step1"><p className="p-3">
                                                
                At Site Dominion, we understand that every business has different needs and budgets when it comes to web development. That's why we offer flexible pricing options to ensure that our clients get the best value for their investment.
                 </p>
                                            <Link href="/pricing">
                                            <button type="submit" className="default-btn btn-two">
                                                Pricing
                                            </button>
                                            </Link></div><div className="col-lg-6 step1"><p className="p-3">
                                            We have worked with clients from various industries and niches, providing them with tailored websites and applications that not only meet their needs but also exceed their expectations. We also specialize in creating high-quality prototype projects that bring our clients' ideas to life. Check out our work.</p>
                                           <Link href="/portfolio">
                                            <button type="submit" className="default-btn btn-two">
                                                Projects
                                            </button>
                                            </Link></div></div>
                                   
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b" data-aos="zoom-in-right" data-aos-delay="200">
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

                                    <AccordionItem uuid="c" data-aos="zoom-in-left" data-aos-delay="300">
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

                                    <AccordionItem uuid="d" data-aos="zoom-in-right" data-aos-delay="400">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Four: Complete Payment
                                            <img className='accordion__image3' src="/images/payment.svg" alt="process" />
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <div className="col-lg-12 step1"><p className="p-3">
                                        Simply follow our three step process to make secure payments to Site Dominion using Venmo for Business:
                                            </p>
                                            <Link href="/getting-started/#payment">
                                            <button type="submit" className="default-btn btn-two">
                                                Payments
                                            </button>
                                            </Link></div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e"  data-aos="zoom-in-left" data-aos-delay="500">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Five: Website Deployment
                                            <img className='accordion__image4' src="/images/browser.png" alt="browse" /> 
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