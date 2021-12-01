import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Navbar.css'

const Header = () => {

    const [isMobile, setIsMobile] = useState(false)

    return (
        <Fragment>
            <nav className="navbar fixed-top">
                <h3 className="logo">Georgie's Catering</h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <Link to="/" className="links">
                        <li>HOME</li>
                    </Link>
                    <Link to="/about" className="links">
                        <li>ABOUT US</li>
                    </Link>
                    <Link to="/menu" className="links">
                        <li>MENU</li>
                    </Link>
                    <Link to="/contact" className="links">
                        <li>CONTACT US</li>
                    </Link>
                    <Link to="/faq" className="links">
                        <li>FAQS</li>
                    </Link>
                    <Link to="/login" className="links login">
                        <li>Login</li>
                    </Link>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
                </button>
            </nav>
        </Fragment>
    )
}

export default Header
