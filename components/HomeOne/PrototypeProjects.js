import React, { Component } from 'react';
import PrototypeProjects from '../Portfolio/PrototypeProjects';

class PrototypeProjectsSlider extends Component {
    render() {
        return (
            <section className="fn_cs_project_sticky_modern pt-100" data-animation-type="alpha">
            <div className="container">
            <div className="section-title">
                    <span>Projects</span>
                    <h2>Browse Through Our Prototype Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                </div> 
                <PrototypeProjects/>                             
            </div>
        </section>
        );
    }
}

export default PrototypeProjectsSlider;