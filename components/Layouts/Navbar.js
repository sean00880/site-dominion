import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import Image from 'next/image';

class Navbar extends Component {
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light" style={{ "height":"20vh"}}>
                        <div className="container">
                           
                                <Link href="/">
                                <a className="navbar-brand">
                                    <img loading="lazy" src="/images/NewLogo.png" alt="Site Dominion Logo"/>
                                </a>
                            </Link>
                        

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li role="none" className="nav-item active">
                                        <Link href="/">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false">
                                                Home <i role="none" className='bx'></i>
                                            </a>
                                        </Link>

                                        
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                About <i role="none" className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/getting-started/#features" activeClassName="active">
                                                    <a className="nav-link">Core Features</a>
                                                </Link>
                                            </li>
                                            <li role="none" className="nav-item">
                                                <Link href="/getting-started/#why-us" activeClassName="active">
                                                    <a className="nav-link">What Is Included?</a>
                                                </Link>
                                            </li>
                                            <li role="none" className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/getting-started/#payment" activeClassName="active">
                                                    <a className="nav-link">Payments</a>
                                                </Link>
                                            </li>
                                            <li role="none" className="nav-item">
                                                <Link href="/industries-we-serve" activeClassName="active">
                                                    <a className="nav-link">Industries We Serve</a>
                                                </Link>
                                            </li>
                                            

                                            
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="/services">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                Services <i role="none" className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a className="nav-link">All Services</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/premium-website-package" activeClassName="active">
                                                    <a className="nav-link">Premium Website Package</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/website-design-and-development" activeClassName="active">
                                                    <a className="nav-link">Website Development</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/website-deployment" activeClassName="active">
                                                    <a className="nav-link">Full Website Deployment</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/blog-creation" activeClassName="active">
                                                    <a className="nav-link">Blog Creation & Setup</a>
                                                </Link>
                                            </li>
                                            <li role="none" className="nav-item">
                                                <Link href="/logo-design" activeClassName="active">
                                                    <a className="nav-link">Logo Design</a>
                                                </Link>
                                            </li>
                                            <li role="none" className="nav-item">
                                                <Link href="/website-optimization" activeClassName="active">
                                                    <a className="nav-link">Project Optimization</a>
                                                </Link>
                                            </li>
                                            <li role="none" className="nav-item">
                                                <Link href="/website-content-writing" activeClassName="active">
                                                    <a className="nav-link">Website Content Writing</a>
                                                </Link>
                                            </li>
                                            
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="/portfolio">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false">
                                                Portfolio <i role="none" className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/portfolio" activeClassName="active">
                                                    <a className="nav-link">All Projects</a>
                                                </Link>
                                            </li>
                                    
                                            <li role="none" className="nav-item">
                                                <Link href="/portfolio/live-projects" activeClassName="active">
                                                    <a className="nav-link">Live Projects</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/portfolio/prototype-projects" activeClassName="active">
                                                    <a className="nav-link">Prototype Projects</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                    <Link href="/getting-started/#quote">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false">
                                                Contact <i role="none" className='bx'></i>
                                            </a>
                                        </Link>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link menu" aria-expanded="false" aria-haspopup="true" onClick={e => e.preventDefault()}>
                                                Blog <i role="none" className='bx'></i>
                                            </a>
                                        </Link>
                                    </li>

                                    
                                </ul>
                                
                                <div className="others-options">
                                <p role="heading">Ready for your website?</p>   
                                    <Link href="/getting-started">
                                        <a className="default-btn">
                                            Get Started <i role="none" className="bx bx-log-in-circle" role="presentation"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;