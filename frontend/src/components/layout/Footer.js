import React, { Fragment } from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Fragment>
            <Navbar expand="lg" variant="dark" bg="dark" sticky="bottom">
                <Container style={{height: '50px', color: 'gray', justifyContent: 'center'}}>
                    <p>Georgie's Catering</p>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Footer