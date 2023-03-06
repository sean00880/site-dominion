import React, { Component } from 'react';
import Link from 'next/link';

class CustomError extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content-wrap">
                            <h2>Your message has been received.</h2>
                            <h3 style={{"textAlign":"center","color":"#ad5555"}}>Thank you for your reaching out to us.</h3>
                            <p>Our staff will get back to you shortly..</p>

                            <Link href="/">
                                <a className="default-btn btn-two">
                                    Return To Home Page
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomError;