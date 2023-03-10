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
                        <h3>Where does it come from?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..".</p>

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
                       </div>
                </div>
              
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;