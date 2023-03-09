import React from 'react'
import Sidebar from '../../../components/Layouts/sidebar'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import( '../../../components/Layouts/Navbar'));
const Footer = dynamic(() => import( '../../../components/Layouts/Footer'));
const Footer2 = dynamic(() => import( '../../../components/Layouts/Footer2'));
import PageBanner from '../../../components/Common/PageBanner';
import { NextSeo } from 'next-seo';

export default function BlogSingle1() {
	return (
		<>
			<NextSeo
            title="Manage SEO in NextJS with Next SEO"
            description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
            canonical="www.example.com/next-seo-blog"
            openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2023-03-08T23:04:13Z',
                    modifiedTime: '2023-03-09T09:31:43Z',
                    authors: [
                        'https://www.sitedominion.com',
                    ],
                    tags: ['Web Development', 'Career'],
                },
                url: 'www.example.com/next-seo-blog',
                images: {
                    url: 'https://www.test.ie/images/cover.jpg',
                    width: 850,
                    height: 650,
                    alt: 'Photo of text',
                },
                site_name: 'Next Blog'
            }}
        />
			<Navbar/>
				{/* Page Title */}
				<PageBanner 
                    pageTitle="Contact Style One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact Style One" 
                /> 
				<div style={{"background":"linear-gradient(45deg, #2e2e2e, black)"}}>
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>2023 and Beyond: Why Web Development is the Perfect Career Choice</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/blog"><a title="Blog">Blog Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">2023 and Beyond: Why Web Development is the Perfect Career Choice</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}


				{/* Sidebar Page */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left */}
							<div className="industify_fn_leftsidebar">

								{/* Single Blog */}
								<div className="industify_fn_blog_single">

									<div className="img_holder">
										<img src="/images/web.png" alt="" />
									</div>

									<div className="desc_holder">
										
										<p>As someone who has been working in web development for several years now, I can confidently say that 2023 is the perfect time to get into this field. With the continued growth of the internet and the increasing importance of digital marketing, the demand for skilled web developers is higher than ever.</p>
										<p>I started my own web development business called Site Dominion because I wanted to help local businesses generate leads while making money and having fun doing what I’m passionate about. I have always been interested in technology and knew that I wanted to work in the tech industry, but I also wanted to make a positive impact in my community.</p>
										<p>Through Site Dominion, I have been able to help numerous small businesses improve their online presence and increase their sales. It’s been incredibly rewarding to see my clients’ businesses grow and thrive as a result of the work I’ve done.</p>
										<p>One of the reasons why web development is such an ideal field for 2023 is because of the flexibility it offers. With many businesses shifting to remote work, web development can easily be done from anywhere in the world as long as you have an internet connection. This means that you can work from the comfort of your own home, or even travel while still earning a living.</p>
										<p>Additionally, web development is a constantly evolving field, which means that there are always new technologies and techniques to learn. This keeps the work exciting and challenging, and ensures that you never stop growing and improving your skills.</p>
										<p>Another great aspect of web development is the potential for entrepreneurship. Starting your own web development business, like I did with Site Dominion, allows you to be your own boss, set your own schedule, and work on projects that you’re truly passionate about.</p>
										<p>Overall, web development is an excellent field to get into in 2023. Whether you’re interested in working for a company or starting your own business, there are plenty of opportunities to succeed and make a positive impact. If you’re interested in learning more about Site Dominion and how we can help your business grow, check out our website at <a href="https://www.sitedominion.com">https://www.sitedominion.com</a>.</p>
									</div>
									<div className="industify_fn_tags">
										<label>Tags:</label>
										<Link href="#"><a>2017</a></Link>
										<Link href="#"><a>Australia</a></Link>
										<Link href="#"><a>Construction</a></Link>
										<Link href="#"><a>New Contract</a></Link>
										<Link href="#"><a>Upgrade</a></Link>
									</div>

								</div>
								{/* /Single Blog */}


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">

								{/* Get Sidebar */}
								<Sidebar/>
								{/* /Get Sidebar */}


							</div>
							{/* Main Sidebar: Right */}

						</div>
					</div>
				</div>
				</div>
				{/* /Sidebar Page */}

			<Footer2/>
			<Footer/>

		</>
	)
}
