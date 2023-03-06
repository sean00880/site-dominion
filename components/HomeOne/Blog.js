import React from 'react';
import Flip from 'react-reveal/Flip';
import {FaBitcoin} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {RxCode} from "react-icons/rx"
import {RiCustomerService2Line} from "react-icons/ri"
import {MdOutlineScreenshot} from "react-icons/md"
import {IoLogoUsd} from "react-icons/io5"
import {CgUserlane} from "react-icons/cg"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import Link from 'next/link';

const MyExpertise = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="fn_cs_triple_blog_modern fn_alpha">
    <div className="container">
    <div className="section-title">
                    <h2>Our Blog</h2>
                    <hr />
                    <h4>Exploring the latest trends, tips, and tricks in web development to create stunning websites and applications.</h4>
                </div>
        <div className="inner">

            <ul>
                <li>
                    <div className="item">
                        <div className="img_holder" style={{ "background": "url(/images/1.jpg)","backgroundSize":"cover" }}>
                            <div className="time">
                                <span></span>
                                <h3>28</h3>
                                <h5>Aug</h5>
                                <h5>2018</h5>
                            </div>
                            <Link href="/blog-single-1"><a></a></Link>
                            <img src='/images/1.jpg' alt="" />
                        </div>
                        <div className="title_holder">
                            <p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
                            <h3><Link href="/blog-single-1"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
                            <p className="t_footer"><Link href="/blog-single-1"><a>Read More</a></Link></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="img_holder" style={{ "background": "url(/images/1.jpg)", "backgroundSize":"cover" }}>
                            <div className="time">
                                <span></span>
                                <h3>27</h3>
                                <h5>Aug</h5>
                                <h5>2018</h5>
                            </div>
                            <Link href="/blog-single-2"><a></a></Link>
                            <img src='/images/1.jpg' alt="" />
                        </div>
                        <div className="title_holder">
                            <p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
                            <h3><Link href="/blog-single-2"><a>How to turn Victorian gasholders apartments</a></Link></h3>
                            <p className="t_footer"><Link href="/blog-single-2"><a>Read More</a></Link></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="img_holder" style={{ "background": "url(/images/1.jpg)", "backgroundSize":"cover" }}>
                            <div className="time">
                                <span></span>
                                <h3>26</h3>
                                <h5>Aug</h5>
                                <h5>2018</h5>
                            </div>
                            <Link href="/blog-single-3"><a></a></Link>
                            <img src="/images/1.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                            <p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
                            <h3><Link href="/blog-single-3"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
                            <p className="t_footer"><Link href="/blog-single-3"><a>Read More</a></Link></p>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</section>
    </>
  );
};

export default MyExpertise;
