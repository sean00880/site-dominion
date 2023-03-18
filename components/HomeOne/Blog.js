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

const MenuItem = ({ href, label }) => {
	return (
	  <li>
		<a href={href}>{label}</a>
	  </li>
	);
  };

const Blog = ({posts}) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <!-- Page Title --> */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Blog</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Blog</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Page Title --> */}


				<ul className="menu" style={{listStyleType:'none',display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
      <span style={{fontFamily:"Smooch Sans",fontSize:"23px"}}>Categories:</span>
	  <li>
		<a href='/blog'>All</a>
	  </li>
	  {posts.map((post) => {
        return (
          <MenuItem
            key={post.id}
            href={`/blog/${post.cat}`}
            label={post.category}
          />
        );
      })}
    </ul>

				<div className="industify_fn_blog_full">
					<div className="container">
						<ul className="industify_fn_postlist">
             
            {posts.map((post) => (
           
            
							<li>
								<div className="post has-post-thumbnail">
									<div className="time"><span></span><h3>{post.date}</h3>
                                <h5>{post.month}</h5>
                                <h5>{post.year}</h5></div>
									<div className="img_holder">
										<Link href={`/blog/${post.cat}/${post.titleurl}`}><a><img src={`/images/${post.photo}`} alt="" /></a></Link>
										<span className="shape1"></span>
									</div>
									<div className="content_holder">
                                    <div className="title">
											<h3><Link href={`/blog/${post.cat}/${post.titleurl}`}><a className="apple">{post.title}</a></Link></h3>
										</div>
										<div className="info_holder">
											<p>
												<span className="t_author">By <Link href="/"><a target="_blank" >Site Dominion</a></Link></span>
												<br />
                                                <br />
												<div className="industify_fn_tags industify_fn_tags2">
                                                    <label>Categories:</label>
										<Link href={`/blog/${post.cat}`}><a style={{"color":"white"}}>{post.category}</a></Link>
										<Link href={`/blog/${post.cat2}`}><a style={{"color":"white"}}>{post.category2}</a></Link>
									</div>
											</p>
										</div>
										
										<div className="excerpt_holder">
											<p>"{post.description}"</p>
										</div>
										<div className="read_holder">
											<p><Link href={`/blog/${post.cat}/${post.titleurl}`}><a>Read More</a></Link> </p>
										</div>
                                        <img className='blogimage' src="/images/lion7.png" alt="" />
									</div>
                                  
								</div>
                               
							</li>
            
        
               ))}
						</ul>
					</div>
				</div>
    </>
  );
};

export default Blog;
