import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from 'next/image'; 

class Testimonials extends Component {
    render() {
        return (
            <section className="client-area ptb-100">
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
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                              slidesPerView: 3,
                            },
                        }}
                        modules={[Navigation, Autoplay]} 
                        className="testimonials-slide"
                    >
                        <SwiperSlide>
                            <div className="single-client">
                                <i role="none" className="quotes flaticon-left-quotes-sign"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                                <ul>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <Image loading="lazy"  height={100} width={100}  src="/images/clients/client1.jpg" alt="Client 1 image." />
                                    <h3>Alen Meair</h3>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-client">
                                <i role="none" className="quotes flaticon-left-quotes-sign"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                                <ul>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <Image loading="lazy"  height={100} width={100}  src="/images/clients/client2.jpg" alt="Client 2 image" />
                                    <h3>Axon Detos</h3>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-client">
                                <i role="none" className="quotes flaticon-left-quotes-sign"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                                
                                <ul>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <Image loading="lazy"  height={100} width={100}  src="/images/clients/client3.jpg" alt="Client 3 image." />
                                    <h3>John Dona</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-client">
                                <i role="none" className="quotes flaticon-left-quotes-sign"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                                <ul>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                    <li><i role="none" className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <Image loading="lazy"  height={100} width={100}  src="/images/clients/client4.jpg" alt="Client 4 image." />
                                    <h3>Jon Smith</h3>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
        );
    }
}

export default Testimonials;