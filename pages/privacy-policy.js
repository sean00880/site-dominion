import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Privacy Policy" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Privacy Policy" 
                /> 
 
                <div className="text-container ptb-100">
                    <div className="container">
                        <h3>Privacy Policy</h3>
             
                        <p>Site Dominion is a web development agency that specializes in providing businesses with custom website design and development solutions. We understand the importance of protecting the privacy and security of our clients and their users’ personal information. We are committed to complying with applicable data protection laws and ensuring the confidentiality, integrity, and availability of the personal information that we collect, use, disclose, and store.</p>
                        <p>This Privacy Policy explains how we collect, use, disclose, and store personal information when you use our website or engage our services. By accessing or using our website or engaging our services, you acknowledge that you have read, understood, and accepted the terms of this Privacy Policy.</p>
                        <h3>Collection of Personal Information</h3>
                        <p>We may collect personal information about you when you access or use our website or engage our services. The personal information that we collect may include:</p>
                        <ul>
                            <li>Your name, email address, phone number, and postal address</li>
                            <li>Information about your business, including its name, website URL, and industry</li>
                            <li>Payment information, such as credit card details</li>
                            <li>Information about your preferences and interests</li>
                            <li>Information about your use of our website or services</li>
                        </ul>
                        <p>We may collect personal information about you directly from you, from our affiliates or subsidiaries, or from third-party sources. We may also collect personal information about you automatically when you use our website, such as through cookies or similar technologies.</p>
                        <h3>Use of Personal Information</h3>
                        <ul>
                            <li>To provide and improve our services to you</li>
                            <li>To communicate with you about our services, promotions, and events</li>
                            <li>To process your payment for our services</li>
                            <li>To comply with our legal and regulatory obligations</li>
                            <li>To detect and prevent fraud, unauthorized access, and other illegal activities</li>
                            <li>To analyze and improve the performance and effectiveness of our website and services</li>
                            <li>To personalize your experience on our website and recommend products or services that may interest you</li>
                            <li>To maintain and improve the security of our website and services</li>
                        </ul>
                        <h3>Disclosure of Personal Information</h3>
                        <ul>
                            <li>With your consent</li>
                            <li>To our affiliates and subsidiaries</li>
                            <li>To our service providers, such as website hosting providers, payment processors, and marketing and advertising partners, who need to access your personal information to perform their services for us</li>
                            <li>To our business partners, such as companies that provide complementary products or services, with your consent</li>
                            <li>To comply with our legal and regulatory obligations, such as responding to a subpoena, court order, or other legal process</li>
                            <li>To protect our rights, property, or safety, or the rights, property, or safety of our clients, employees, or others</li>
                            <li>In connection with a business merger, acquisition, or sale of assets, in which case your personal information may be transferred to the acquiring company</li>
                        </ul>
                        <p>We require our service providers and business partners to protect the confidentiality and security of your personal information and to use it only for the purposes for which it was disclosed.</p>
                        <h3>Deta Retention</h3>
                        <p>We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with our legal and regulatory obligations, and to protect our rights and interests. We will securely dispose of or de-identify your personal information when it is no longer necessary for these purposes.</p>
                        <h3>Cookies and Similar Technologies</h3>
                        <p>We use cookies and similar technologies on our website to collect certain information about your use of our website, such as your IP address, browser type, device information, and browsing behavior. Cookies are small text files that are stored on your device when you access or use our website. We use cookies to personalize your experience on our website, to remember your preferences, and to analyze and improve the performance and effectiveness of our website.</p>
                        <p>We may use both session cookies and persistent cookies. Session cookies are temporary cookies that are erased when you close your browser.</p>
                      
                       <h3>Changes to Privacy Policy</h3>
                       <p>We may update our privacy policy from time to time to reflect changes in our practices or services. We will notify you of any significant changes to this policy.</p>
                        <h3>Contact Us</h3>
                        <p>If you have any questions or concerns about our privacy policy or how we handle your personal information, please contact us at https://www.sitedominion.com/getting-started/#quote.</p>
                        </div>
                </div>
              
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;