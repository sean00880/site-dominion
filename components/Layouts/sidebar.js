import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <>
            <div className="industify_fn_sidebar">
                <div className="industify_fn_sidebar_in">

                    <div className="widget_block">
                        <div className="industify_fn_widget_estimate">
                            <div className="img_holder">
                                <span className="helper1"></span>
                                <span className="helper2"></span>
                                <span className="helper3"></span>
                                <span className="helper4"></span>
                                <span className="helper5"></span>
                                <span className="helper6"></span>
                                <div className="abs_img" style={{"backgroundImage":"url(/images/mockup.png)"}}></div>
                            </div>
                            <div className="bfwe_inner">
                                <p>Let's get started! Contact us for a free quote on your next home improvement project.</p>
                                <Link href="/contact"><a>Request an Estimate</a></Link>
                                
                            </div>
                            
                        </div>
                        <img src="/images/lion7.png"/>
                    </div>

                </div>
            </div>
        </>
    )
}
