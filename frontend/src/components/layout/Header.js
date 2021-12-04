import React, { Fragment, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/authActions'
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'
import './Navbar.css'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()

    const [isMobile, setIsMobile] = useState(false)

    const { user } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout())
        alert.success("Logged out successfully")
        navigate('/')
    }

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
                    {user ? (
                        <Fragment>
                            <Link to="/dashboard" className="links login">
                                <li>{user.full_name}</li>
                            </Link>
                            <Button className="links login" onClick={() => {
                                logoutHandler()
                            }}>
                                <li>Logout</li>
                            </Button>
                        </Fragment>
                    ) : (
                        <Link to="/login" className="links login">
                            <li>Login</li>
                        </Link>
                    )}
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
                </button>
            </nav>
        </Fragment>
    )
}

export default Header