import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

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
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/tree.jpg" alt="Grandpa Ron's LLC website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand2.png" alt="All Landscaping Services LLC website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand3.png" alt="Designation Dump LLC website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand4.png" alt="Decoded Web website created by Site Dominion." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand5.png" alt="Blank image number 1." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand6.png"  alt="Blank image number 2." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand7.png"  alt="Blank image number 3." />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank" role="button">
                                <img src="/images/brands/brand8.png"  alt="Blank image number 4." />
                            </a>
                        </SwiperSlide>
                    </Swiper> 
                </div>
            </div>
        );
    }
}

export default PartnerSlider;