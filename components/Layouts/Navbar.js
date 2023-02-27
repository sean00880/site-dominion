import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

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
                                    <img src="/images/NewLogo.png" alt="Site Dominion Logo"/>
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
                                        <Link href="#">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                Home <i role="none" className='bx bx-chevron-down' role='none'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home One</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a className="nav-link">Home Two</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a className="nav-link">Home Three</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/index-4" activeClassName="active">
                                                    <a className="nav-link">Home Four</a>
                                                </Link>
                                            </li>
                                            
                                            <li role="none" className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Home Five</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                About <i role="none" className='bx bx-chevron-down' role='none'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/about-1" activeClassName="active">
                                                    <a className="nav-link">About Style One</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/about-2" activeClassName="active">
                                                    <a className="nav-link">About Style Two</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="/services">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                Services <i role="none" className='bx bx-chevron-down' role='none'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a className="nav-link">Services Style One</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/services-2" activeClassName="active">
                                                    <a className="nav-link">Services Style Two</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/services-3" activeClassName="active">
                                                    <a className="nav-link">Services Style Three</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/services-4" activeClassName="active">
                                                    <a className="nav-link">Services Style Four</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/service-details" activeClassName="active">
                                                    <a className="nav-link">Service Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                Pages <i role="none" className='bx bx-chevron-down' role='none'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>
                                    
                                            <li role="none" className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a className="nav-link">Faq</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li> 

                                            <li role="none" className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/login" activeClassName="active">
                                                    <a className="nav-link">Get Started</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/sign-up" activeClassName="active">
                                                    <a className="nav-link">Sign Up</a>
                                                </Link>
                                            </li> 

                                            <li role="none" className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a className="nav-link">404 error</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link menu" aria-haspopup="true" onClick={e => e.preventDefault()}>
                                                News <i role="none" className='bx bx-chevron-down' role='none'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/news-grid" activeClassName="active">
                                                    <a className="nav-link">News Grid</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/news-right-sidebar" activeClassName="active">
                                                    <a className="nav-link">News Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/news-details" activeClassName="active">
                                                    <a className="nav-link">News Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li role="none" className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link menu" aria-haspopup="true" aria-expanded="false" onClick={e => e.preventDefault()}>
                                                Contact <i role="none" className='bx bx-chevron-down' role='none'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li role="none" className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a className="nav-link">Contact Style One</a>
                                                </Link>
                                            </li>

                                            <li role="none" className="nav-item">
                                                <Link href="/contact-2" activeClassName="active">
                                                    <a className="nav-link">Contact Style Two</a>
                                                </Link>
                                            </li>
                                        </ul>
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