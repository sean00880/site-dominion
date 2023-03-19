import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            

                            <div className="col-lg-12">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/blog">
                                                <a className="default-btn">All Blog Posts</a>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;