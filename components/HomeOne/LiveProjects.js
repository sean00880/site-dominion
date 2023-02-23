import React, { Component } from 'react';
import LiveProjects from '../Portfolio/LiveProjects';

class LiveProjectsSlider extends Component {
    render() {
        return (
            <section className="fn_cs_project_sticky_modern" data-animation-type="alpha">
            <div className="container">
            <div className="section-title" style={{"textAlign":"left"}}>
                    <span>Projects</span>
                    <h2>Check out our LIVE websites.</h2>
                    <hr />
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</h4>
                 </div>
                <LiveProjects/>
            </div>
        </section>
        );
    }
}

export default LiveProjectsSlider;