import React, { Component } from 'react';
import Link from 'next/link';

class PrototypeProjects extends Component {
    render() {
        return (
            <div className="inner inner2">
                    
            <div className="right_part">
                <div className="fn_cs_sticky_section_right">
                    <ul>
                        <li>
                            <div className="item">
                                <div className="img_holder">
                                    <img src="img/thumb/560-375.jpg" alt="" />
                                    <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 5" style={{ "backgroundImage": "url(/images/projecta.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                       </div>
                                <div className="title_holder">
                                    <h3><Link href="/portfolio/greenpower"><a>GREENPOWER Landscaping - Landscaping Business Website</a></Link></h3>
                                    <p>
                                        <Link href="/portfolio-single-1"><a>
                                            <span className="text">View More</span>
                                            
                                        </a></Link>
                                    </p>
                                    <Link href="/portfolio-single-1"><a></a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="img_holder">
                                    <img src="img/thumb/560-375.jpg" alt="" />
                                    <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 6" style={{ "backgroundImage": "url(/images/projectc.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                 </div>
                                <div className="title_holder">
                                    <h3><Link href="/portfolio-single-2"><a>Articulate Insuarance - Insurance Agency</a></Link></h3>
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
                                    <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 7" style={{ "backgroundImage": "url(/images/projectb.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                </div>
                                <div className="title_holder">
                                    <h3><Link href="/portfolio-single-3"><a>Shareo - Online Marketing Agency</a></Link></h3>
                                    <p>
                                        <Link href="/portfolio-single-3"><a>
                                            <span className="text">View More</span>
                                        
                                        </a></Link>
                                    </p>
                                    <Link href="/portfolio-single-3"><a></a></Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="left_part">
                <div className="fn_cs_sticky_section">
                    <div className="left_part_in left_part_in2">
                        <h3>Prototype Projects</h3>
                        <p>It&apos;s a burning, never-ending desire to help our clients maximize their outcomes and exceed their strategic goals. Though our goal is a bit aspirational, our values are what drive us every day. </p>
                        <Link href="/portfolio"><a className='projects-btn'>All Projects</a></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default PrototypeProjects;