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
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</h4>
                </div>
                <LiveProjects/>
                <PrototypeProjects/>
            </div>
            </section>
        );
    }
}

export default Services;