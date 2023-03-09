import React from 'react'
import Link from 'next/link'
import PageBanner from '../components/Common/PageBanner';
import Navbar from '../components/Layouts/Navbar';
import Footer3 from '../components/Layouts/Footer3';
import Footer from '../components/Layouts/Footer';
import { data } from "../data"
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Blog = dynamic(() => import( '../components/HomeOne/Blog'));

export default function Index({ posts }) {
	return (
		<>
			<NextSeo title="Site Dominion | Our Blog" />
			<Navbar />
			
			<Blog posts={posts}/>
			<Footer3/>
			<Footer/>

		</>
	)
}


export const getStaticProps = () => {
    const posts = data;
    return {
      props: { posts },
    };
  };