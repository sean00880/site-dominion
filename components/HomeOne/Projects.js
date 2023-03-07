import React, { Component } from 'react';
import Link from 'next/link';
import LiveProjects from '../Portfolio/LiveProjects';
import PrototypeProjects from '../Portfolio/PrototypeProjects';

class Services extends Component {
    render() {
        return (
            <section className="fn_cs_project_sticky_modern" data-animation-type="alpha">
            <div className="container">
            <div className="section-title" style={{"textAlign":"center"}}>
                    <span>Projects</span>
                    <h2>Browse Through Our Collection of Websites</h2>
                    <hr />
                    <h4>Our portfolio showcases a wide range of projects, from small business websites to large-scale enterprise level projects. Each project is unique and tailored to our clients' specific needs, goals, and target audience.</h4>
                </div>
                <LiveProjects/>
                <PrototypeProjects/>
            </div>
            </section>
        );
    }
}

export default Services;