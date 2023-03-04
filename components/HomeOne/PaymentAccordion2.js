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
import Image from 'next/image'; 

class HomeAccordion extends Component {
    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="d-flex flex-column align-items-center w-100">
                    <h2>As a web development agency, using Venmo for business has several benefits for accepting payments:</h2>
<li>
User-Friendly: Venmo is a user-friendly platform that is widely used and trusted by many consumers. This means that your clients are likely to feel comfortable using Venmo to make payments to your business.
</li><li>
Quick Payments: Venmo offers quick and easy payment processing. Clients can make payments to your business within minutes, which can help to speed up the payment process and improve cash flow.
</li><li>
Cost-Effective: Venmo is a cost-effective option for accepting payments. Unlike traditional payment processors, Venmo does not charge a monthly fee, and there are no fees for receiving payments. Venmo only charges a small fee for instant transfers, which are not necessary for most business transactions.
</li><li>
Secure: Venmo offers secure payment processing, with built-in fraud protection and encryption. This can give your clients peace of mind knowing that their transactions are secure.
</li><li>
Mobile-Friendly: Venmo is a mobile-friendly platform, which means that your clients can easily make payments from their mobile devices. This can be especially convenient for clients who are on-the-go and prefer to make payments from their smartphones.
</li>
<p>Overall, using Venmo for business can provide a convenient, secure, and cost-effective way to accept payments from your clients.</p>
                    <h2>Follow these instructions when you're ready to pay:</h2>
                    <div className="faq-img">
                                <img loading="lazy"  src="/images/qr.png" alt="Site Dominion's home-accordion image."  />
                            </div>
                        <div className="col-lg-12">
                            <div className="faq-accordion">
                                <Accordion >
                                    <AccordionItem uuid="f">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Step One: Set up a Venmo for Business account   
                                                <img loading="lazy"  className='accordion__image' src="/images/account.png" alt="browse" />                                            
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
                                                <img loading="lazy"  className='accordion__image2' src="/images/qrcode.png" alt="browse" />                                               
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                        <p className="p-3">Once you have the Venmo for Business app installed, log in to your account or create a new one if you don't have one yet. Then, add Site Dominion as a recipient by searching for our Venmo username or scanning our QR code (locate these details on the banner above).</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="h" >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Step Three: Make the payment
                                            <img loading="lazy"  height={100} width={100}  className='accordion__image' src="/images/venmo.svg" alt="process" />
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