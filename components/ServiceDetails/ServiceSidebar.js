import React, { Component } from 'react';
import Link from 'next/link';

class ServiceSidebar extends Component {
    render() {
        return (
            <div className="service-sidebar-area">
                <div className="service-list">
                    <h3 className="service-details-title">Facilities</h3>
                    <ul>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    Technology
                                    <i role="none" className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    Tips
                                    <i role="none" className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    AI & IT
                                    <i role="none" className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    Solution
                                    <i role="none" className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Contact Info</h3>
                    <ul>
                        <li>
                            +800 603 6035
                            <i role="none" className='bx bx-phone-call bx-rotate-270'></i>
                        </li>
                        <li>
                            hello@jumpx.com
                            <i role="none" className='bx bx-envelope'></i>
                        </li>
                        <li>
                            123, Western Road, Australia
                            <i role="none" className='bx bx-location-plus'></i>
                        </li>
                        <li>
                            9:00 AM – 8:00 PM
                            <i role="none" className='bx bx-time'></i>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Download Brochures</h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    PDF File (1)
                                    <i role="none" className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    PDF File (2)
                                    <i role="none" className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    PDF File (3)
                                    <i role="none" className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    PDF File (4)
                                    <i role="none" className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ServiceSidebar;