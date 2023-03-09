import React from 'react'
import Link from 'next/link'
import PageBanner from '../../components/Common/PageBanner';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import { data } from "../../data"
import dynamic from 'next/dynamic';
const Blog = dynamic(() => import( '../../components/HomeOne/Blog2'));

export default function Index({ posts }) {
	return (
		<>
			<Navbar />
				
			<Blog posts={posts}/>
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