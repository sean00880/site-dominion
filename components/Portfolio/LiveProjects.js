import React, { Component } from 'react';
import Link from 'next/link';

class LiveProjects extends Component {
    render() {
        return (
            <div className="inner">
                    <div className="left_part">
                        <div className="fn_cs_sticky_section">
                            <div className="left_part_in">
                                <h3>Our LIVE Projects</h3>
                                <p>It&apos;s a burning, never-ending desire to help our clients maximize their outcomes and exceed their strategic goals. Though our goal is a bit aspirational, our values are what drive us every day. </p>
                                <Link href="/portfolio"><a>All Projects</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="right_part">
                        <div className="fn_cs_sticky_section_right">
                            <ul>
                            <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="img/offer1.png" alt="" />
                                            <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 1" style={{ "backgroundImage": "url(/images/project4.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}/></Link></div>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/portfolio/decoded-web"><a>All Landscaping Services LLC</a></Link></h3>
                                            <p>
                                                <Link href="/portfolio/decoded-web"><a>
                                                    <span className="text">View More</span>
                                                    
                                                </a></Link>
                                            </p>
                                            <Link href="/portfolio/decoded-web"><a></a></Link>
                                        </div>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="img/thumb/560-375.jpg" alt="" />
                                            <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 2" style={{ "backgroundImage": "url(/images/project2.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/portfolio-single-2"><a>Designation Dump</a></Link></h3>
                                            <p>
                                                <Link href="/portfolio-single-2"><a>
                                                    <span className="text">View More</span>
                                                    
                                                </a></Link>
                                            </p>
                                            <Link href="/portfolio-single-2"><a></a></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="img/thumb/560-375.jpg" alt="" />
                                            <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 3" style={{ "backgroundImage": "url(/images/project3.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                       </div>
                                        <div className="title_holder">
                                            <h3><Link href="/portfolio-single-3"><a>Grandpa Ron's</a></Link></h3>
                                            <p>
                                                <Link href="/portfolio-single-3"><a>
                                                    <span className="text">View More</span>
                                                
                                                </a></Link>
                                            </p>
                                            <Link href="/portfolio-single-3"><a></a></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="img/offer1.png" alt="" />
                                            <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 4" style={{ "backgroundImage": "url(/images/project1.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/portfolio/decoded-web"><a>Decoded Web</a></Link></h3>
                                            <p>
                                                <Link href="/portfolio/decoded-web"><a>
                                                    <span className="text">View More</span>
                                                    
                                                </a></Link>
                                            </p>
                                            <Link href="/portfolio/decoded-web"><a></a></Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default LiveProjects;