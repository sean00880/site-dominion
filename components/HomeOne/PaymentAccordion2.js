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
                    <div className="faq-img">
                                <img src="/images/qr.png" alt="Site Dominion's home-accordion image."  />
                            </div>
                        <div className="col-lg-12">
                            <div className="faq-accordion">
                                <Accordion >
                                    <AccordionItem uuid="f">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Step One: Set up a Venmo for Business account   
                                                <img className='accordion__image' src="/images/account.png" alt="browse" />                                            
                                            </AccordionItemButton>
                                            
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                           
                                        <p className="p-3">
                                                Download and install the Venmo for Business app on your smartphone or tablet. You can download it for free from the App Store or Google Play Store.
                                            </p>
                
                                    
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="g">
                                        <AccordionItemHeading>
                                            <AccordionItemButton >
                                             
                                                Step Two: Add Site Dominion as a recipient 
                                                <img className='accordion__image2' src="/images/qrcode.png" alt="browse" />                                               
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                        <p className="p-3">Once you have the Venmo for Business app installed, log in to your account or create a new one if you don't have one yet. Then, add Site Dominion as a recipient by searching for their Venmo username or scanning their QR code. You can find Site Dominion's Venmo username on their website or by contacting them directly.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="h" >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Three: Make the payment
                                            <img className='accordion__image' src="/images/venmo.svg" alt="process" />
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            After adding Site Dominion as a recipient, enter the payment amount and a brief description of the payment. Verify the payment details and then confirm the payment. You may be prompted to enter a PIN or use Touch ID to authorize the payment. Once the payment is complete, you will receive a notification confirming the transaction.
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