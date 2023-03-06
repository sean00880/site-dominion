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
      <section className="fn_cs_triple_blog_modern fn_alpha blog-section">
     
    <div className="container">

        <div className="inner">
        <img priority className="bannerImage3" src="/images/mockup.png" alt="Site Dominion's banner image." data-aos="fade-right" data-aos-delay="3000" />
           

        </div>
    </div>
</section>
    </>
  );
};

export default MyExpertise;
