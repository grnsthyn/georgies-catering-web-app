import React, { Fragment, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/authActions'
import { useNavigate } from "react-router-dom"
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
// import './Navbar.css'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()

    const { user } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout())
        alert.success("Logged out successfully")
        navigate('/')
    }

    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Georgie's Catering</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/faq">FAQS</Nav.Link>
                            {
                                user ? (
                                    <Fragment>
                                        <NavDropdown title={user.full_name} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/admin/dashboard">Dashboard</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <Button variant="danger" onClick={() => {
                                                logoutHandler()
                                            }}>Logout</Button>
                                        </NavDropdown>
                                    </Fragment>
                                ) : (
                                    <Nav.Link href="/login">Sign in</Nav.Link>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header