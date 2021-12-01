import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <Fragment>
            <Container fluid style={{ backgroundColor: 'red' }}>
                <Row>
                    <Col lg="12"  style={{ height: '100vh', margin: '', textAlign: 'center', background: 'linear-gradient(to bottom, rgba(149, 149, 149, 0.853), rgba(16, 16, 16, 0.853)), url("./images/background1.jpeg")', width: '100vw', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '300px 20px 50px 20px' }}>
                        <h1>WELCOME MESSAGE HERE</h1>
                        <p>lorem ipsum monkey type she governor school country hieght food burger</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        1 of 3
                    </Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        1 of 3
                    </Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home