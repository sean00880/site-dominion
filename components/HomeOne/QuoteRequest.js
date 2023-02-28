import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ServicesStyleOne(){

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_it2ab1j', 'template_y4eut5v', form.current, 'jUn1z-vodKfQLijZ7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    const [buttonPopup, setButtonPopup] = useState(false);
        
    return (

    <div className="main-contact-area" id="quote">
            <div className="container">
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Get Your FREE Quote</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.</p>
                </div>

                <div className="row align-items-center" style={{"padding":"0", "margin":"2vh 0","background":"none"}}>
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-wrap contact-pages mb-0">
                            <div className="contact-form" style={{"borderRadius":"1vh", "margin":"2vh"}}>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row" style={{"borderRadius":"0","background":"none"}}>
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
                                                    name="contact" 
                                                    placeholder="Phone number" 
                                                    className="form-control" 
                                                    
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="form-group">
                                            <label name="text" 
                                                    cols="30" 
                                                    rows="6" 
                                                    placeholder="Write your message..." 
                                                    className="form-control form-control2" 
                                                    
                                                   
                                                    required >
													Service:
													<select className="options" name="service">
                                                        <option value="Package">Site Dominion Package</option>
														<option value="Web Dev">Website Development</option>
                                                        <option value="Logo">Logo Creation</option>
														<option value="SEO">SEO</option>
														<option value="Blog">Blog Setup</option>
                                                        <option value="Content Management">Content Management/Creation</option>
                                                        <hr />
                                                        <option value="Other">Other</option>
													</select>
													
												</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="form-group">
                                            <label name="text" 
                                                    cols="30" 
                                                    rows="6" 
                                                    placeholder="Write your message..." 
                                                    className="form-control form-control2" 
                                                    
                                                   
                                                    required >
													Industry/Niche:
													<select className="options" name="industry">
                                                        <option value="Construction">Construction</option>
                                                        <option value="Landscaping">Landscaping / Junk Removal</option>
                                                        <option value="Salon">Salon / Parlor</option>
														<option value="Health">Health / Medical</option>
														<option value="Home Services">Home Services</option>
                                                        <option value="Small business">Small Business (Describe below)</option>
                                                        <hr />
                                                        <option value="Other">Other (Describe below)</option>
													</select>
													
												</label>
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
    
        )
    }


