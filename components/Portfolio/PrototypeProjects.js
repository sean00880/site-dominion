import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                                    <Image height={100} width={100} loading="lazy"  src="/img/thumb/560-375.jpg" alt="" />
                                    <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 5" style={{ "backgroundImage": "url(/images/projecta.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                       </div>
                                <div className="title_holder">
                                    <h3><Link href="/portfolio/greenpower-landscaping"><a>GREENPOWER Landscaping - Landscaping Business Website</a></Link></h3>
                                    <p>
                                        <Link href="/portfolio/greenpower-landscaping"><a>
                                            <span className="text">View More</span>
                                            
                                        </a></Link>
                                    </p>
                                    <Link href="/portfolio/greenpower-landscaping"><a></a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="img_holder">
                                    <Image height={100} width={100} loading="lazy"  src="/img/thumb/560-375.jpg" alt="" />
                                    <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 6" style={{ "backgroundImage": "url(/images/projectc.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                 </div>
                                <div className="title_holder">
                                    <h3><Link href="/portfolio/articulate-insurance"><a>Articulate Insuarance - Insurance Agency</a></Link></h3>
                                    <p>
                                        <Link href="/portfolio/articulate-insurance"><a>
                                            <span className="text">View More</span>
                                            
                                        </a></Link>
                                    </p>
                                    <Link href="/portfolio/articulate-insurance"><a></a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="img_holder">
                                    <Image height={100} width={100} loading="lazy" src="/img/thumb/560-375.jpg" alt="" />
                                    <div className="abs_img" ><Link href=""><a role="img" aria-label="Background Image 7" style={{ "backgroundImage": "url(/images/afj.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                </div>
                                <div className="title_holder">
                                    <h3><Link href="/portfolio/afj-productions"><a>A Film Junkie Productions - Video Production Agency [Live Soon]</a></Link></h3>
                                    <p>
                                        <Link href="/portfolio/afj-productions"><a>
                                            <span className="text">View More</span>
                                        
                                        </a></Link>
                                    </p>
                                    <Link href="/portfolio/afj-productions"><a></a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Image loading="lazy" height={100} width={100} src="/img/thumb/560-375.jpg" alt="" />
                                            <div className="abs_img" ><Link href=""><a role="/img" aria-label="Background Image 2" style={{ "backgroundImage": "url(/images/metanetic.png)", "backgroundSize":"contain", "backgroundPosition":"center","backgroundRepeat":"no-repeat" }}></a></Link></div>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/portfolio/metanetic"><a>Metanetic</a></Link></h3>
                                            <p>
                                                <Link href="/portfolio/metanetic"><a>
                                                    <span className="text">View More</span>
                                                    
                                                </a></Link>
                                            </p>
                                            <Link href="/portfolio/metanetic"><a></a></Link>
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
                        <p>In our portfolio, you'll find a wide range of prototype websites that showcase our expertise in design, development, and user experience. From sleek and modern designs to more traditional layouts, we have experience creating websites for a variety of industries and niches.</p>
                        <Link href="/portfolio"><a className='projects-btn'>All Projects</a></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default PrototypeProjects;