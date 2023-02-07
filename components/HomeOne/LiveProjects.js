import React, { Component } from 'react';
import LiveProjects from '../Portfolio/LiveProjects';

class LiveProjectsSlider extends Component {
    render() {
        return (
            <section className="fn_cs_project_sticky_modern pt-100" data-animation-type="alpha">
            <div className="container">
            <div className="section-title">
                    <span>Projects</span>
                    <h2>Check out our LIVE websites.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                </div>
                <LiveProjects/>
            </div>
        </section>
        );
    }
}

export default LiveProjectsSlider;