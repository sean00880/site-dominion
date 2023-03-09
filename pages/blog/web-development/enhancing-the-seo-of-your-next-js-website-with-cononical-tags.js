import React from 'react'
import Sidebar from '../../../components/Layouts/sidebar'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import( '../../../components/Layouts/Navbar'));
const Footer = dynamic(() => import( '../../../components/Layouts/Footer'));
const Footer2 = dynamic(() => import( '../../../components/Layouts/Footer2'));
import PageBanner from '../../../components/Common/PageBanner';
import { codepen, CopyBlock, solarizedDark, a11yLight } from "react-code-blocks";



export default function BlogSingle1() {
	return (
		<>
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
							<h3>Enhancing the SEO of Your Next.js Website with Canonical Tags</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/blog"><a title="Blog">Blog</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/blog/career"><a title="Blog">Career</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Enhancing the SEO of Your Next.js Website with Canonical Tags</span></li>
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
										
										<p>It’s crucial to make sure the search engines can tell which version of a given page is the original while developing a website. Canonical tags are useful in this situation. An HTML tag called a canonical tag informs search engines which version of a certain page is the official one. We’ll go over how to add canonical tags to a Next.js website in this blog post.</p>
										<h4>Step 1: Determine which Pages Need a Canonical Tag</h4>
										<p>The initial step is to identify the internet pages that call for canonical tags. Pages with various URLs or versions frequently utilize canonical tags. If a blog post appears on multiple pages of your website, for instance, the original blog post should have a canonical tag added to it. Search engines will be able to determine which version is the official one with the aid of this.</p>
										<h4>Step 2: Install the Next.js Head Component</h4>
										<p>You can edit the head section of your HTML document using the Head component provided by Next.js. You must run the following command to install the Head component before you can use it:</p>
										<CopyBlock
          language="js"
          text={"npm install next/head"}
          showLineNumbers={true}
          theme={a11yLight}
          wrapLines="true"
          codeBlock
        />
										<h4>Step 3: Add the Canonical Tag to your pages</h4>
										<p>After setting up the Head component, you can import it and use it to edit the HTML document’s head section to add the canonical tag to your pages. Here’s an illustration:</p>
										<CopyBlock
          language="jsx"
          text={`import Head from 'next/head'

		  function MyPage() {
			return (
			  <>
				<Head>
				  <link rel="canonical" href="https://example.com/page/inner-page" />
				</Head>
				<div>
				  {/* Page content */}
				</div>
			  </>
			)
		  }`}
          showLineNumbers={true}
          theme={a11yLight}
          wrapLines="true"
          codeBlock
        />
										<p>To add a canonical tag to the head section of our HTML document, we import the Head component from the “next/head” module in the example above. The URL of the initial blog post was entered as the href attribute of the link tag.</p>
										<h4>Step 4: Examine Your Canonical Tags</h4>
										<p>It’s crucial to check that your pages are functioning properly after adding the canonical tag. To make sure your canonical tags are configured properly, you can utilize a tool like Google Search Console.</p>
										<h4>Conclusion</h4>
										<p>Canonical tag addition is a quick and easy operation that can help your Next.js website perform better in search results. You may make sure that search engines recognize which version of your pages is the authoritative one by following the instructions provided in this blog post. This can boost your website’s exposure and search engine rankings.</p>
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
