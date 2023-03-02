import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class News extends Component {
    render() {
        return (
            <section className="news-area pt-100 pb-70" >
                <div className="container" >
                    <div className="section-title2">
                        <h2>Our Blog</h2>
                        <hr />
                        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum fugit temporibus possimus itaque accusamus voluptatibus dignissimos nobis eaque.</h4>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img loading="lazy" src="/images/blog/blog1.png" alt="Blog Post 1 | Site Dominion." />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>20 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="/news-grid"> 
                                                <a>
                                                    <i role="none" className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i role="none" className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Is Machine Learning Right For You</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>
                                    
                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i role="none" className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img loading="lazy"  src="/images/blog/blog2.png" alt="Blog 2 post." />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>21 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="/news-grid"> 
                                                <a>
                                                    <i role="none" className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i role="none" className="flaticon-conversation"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>The State Of Artificial Intelligence</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>
                                    
                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i role="none" className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img loading="lazy"  src="/images/blog/blog3.png" alt="Blog 3 post." />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>22 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="/news-grid"> 
                                                <a>
                                                    <i role="none" className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i role="none" className="flaticon-conversation"></i> 4 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Our Company Machine Learning </h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i role="none" className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;