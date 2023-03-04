import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';
import PickServiceLink from './PickServiceLink';
import Image from 'next/image';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{'borderRadius':'0'}}>
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <Image loading="lazy"  src="/images/blog.png" alt="Image" width={660} height={494} />
                                </div>

                                <h2>Blog Creation Services that Deliver Engaging Blog Designs</h2>

                                <p>With the help of a corporate blog, you can engage with your audience and promote consistent online brand messaging. The way your blog is laid out, though, can significantly influence how readers interact with it.</p>
                                
                                <h3>Why own a blog?</h3>
                                <p>When setting up and maintaining a blog, you will communicate with your intended audience directly. It offers your business the possibility to spread messages that may not otherwise be heard. A blog may be used for everything, from announcing new products and significant updates to establishing your business as an industry authority. </p>

                                <p>By optimizing your web pages, including your blog entries, you may increase the number of people who find your business online by using search engines like Google. Ranking criteria are used by Google and other search engines to determine the results that appear for each search query. It determines how and where to prioritize those results as well. </p>
                                
                                <h3>How does blogging tie in with SEO?</h3>
                                <p> As previously mentioned, ranking factors are used by Google and other search engines to determine the results that appear for each search query. It determines how to rank those results as well. Site Dominion can improve your website's performance on search results by taking in consideration the following factors:</p>
                                
                                <h4>1. Rate of Organic Clicks</h4>

                                <p>Blogs have the ability to respond to transactional, informative, and navigational search inquiries. More forms of content can result in more clicks on your pages, which will boost your SEO.</p>
                                
                                <h4>2. Indexing More Pages</h4>

                                <p>Search engines prefer reliable and credible websites. They want to provide trustworthy information to website users, and one method they might do this is by counting the number of indexed pages on a website.</p>

                                <p>Having a bigger website typically means it is a better source of information. Smaller websites can still outrank larger ones since search engines understand that this isn't always the case.</p>
                                
                                <h4>3. Backlinks & Internal Links</h4>

                                <p>Backlinks function as a kind of online review process. It's more probable that your website will rank in search results if your blog has backlinks from reputable websites.

Blog postings typically draw more high-quality backlinks since they are more likely to educate and generate awareness for readers.</p>

                                <p>You give users a clear path to follow when you link from one page on your website to another. Internal links can also help visitors find the stuff they're seeking for on your website. These links also assist web crawlers in understanding how your site is structured.

A blog adds more website pages that you can internally link to. It also provides you with the opportunity to point website visitors to other pages that can benefit your users.</p>

                                <h3>What sets us apart?</h3>
                                <p>Our blog designers are aware of the significance of blogging for businesses. Consequently, they put the same amount of effort into producing blogs as they do into creating complete corporate websites.</p>
                                
                               
                                <h3>Conclusion:</h3>
                                <p>Spread the word about your story by choosing Site Dominion to setup your blog. Make a statement with a blog website that has been expertly designed and can be modified to meet your brand.</p>
                                
                                <PickServiceLink/>

                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img loading="lazy"  src="/images/services-details/services-details2.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Fully Custom Blog Design
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        100% Original Content
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Backlinks Assistance
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        Upto 5 Posts
                                                    </li>
                                                    <li>
                                                        <i role="none" className='bx bx-check'></i>
                                                        SEO
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;