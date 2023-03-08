import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from 'next/image'; 

class PartnerSlider extends Component {
    render() {
        return (
            <div className="brand-area-two ptb-100">
                <div className="container">
                    <Swiper 
                        spaceBetween={25}
                        navigation={true} 
                        autoplay={{
                            delay: 6500,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Navigation, Autoplay]} 
                        className="brand-slide text-center"
                    >
                        <SwiperSlide>
                            <a href="https://www.grandparonsllc.com/" target="_blank" role="button">
                                <Image loading="lazy"  height="100px" width="125px"  src="/images/brands/tree.jpg" alt="Grandpa Ron's LLC website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="https://www.alllandscapingservicesllcmaryland.com/" target="_blank" role="button">
                                <Image loading="lazy"  height={100} width={100}  src="/images/brands/brand2.png" alt="All Landscaping Services LLC website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="https://designation-dump.vercel.app/" target="_blank" role="button">
                                <Image loading="lazy"  height={100} width={100}  src="/images/brands/brand3.png" alt="Designation Dump LLC website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="http://decodedweb.us/" target="_blank" role="button">
                                <Image loading="lazy"  height={100} width={125}  src="/images/brands/brand4.png" alt="Decoded Web website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="https://afj-productions.vercel.app/" target="_blank" role="button">
                                <Image loading="lazy"  height={100} width={100}  src="/images/afjlogo.png" alt="Blank image number 1." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="https://greenpower-delta.vercel.app/" target="_blank" role="button">
                                <Image loading="lazy"  height={100} width={100}  src="/images/GPlogo.png"  alt="Blank image number 2." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <Image loading="lazy"  height={100} width={100}  src="/images/zen.png"  alt="Blank image number 3." />
                            </a>
                        </SwiperSlide>

                    </Swiper> 
                </div>
            </div>
        );
    }
}

export default PartnerSlider;