import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllMenu, clearErrors } from '../../actions/menuActions'
// import { useNavigate } from "react-router-dom"
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

const Menu = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const { loading, error, menu } = useSelector(state => state.menu)

    useEffect(() => {
        dispatch(getAllMenu())

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])

    return (
        <Fragment>
            <Container fluid style={{ margin: '10px 30px 10px auto'}}>
                <center><h1>Menu</h1></center>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={{ margin: 'auto' }}>
                    {loading ? <p>Loading...</p> : (
                        <Fragment>
                            { menu && menu.map(item => (
                                <Fragment>
                                    <Col>
                                        <Card style={{ width: '18rem', margin: '20px auto' }}>
                                            <Card.Img variant="top" src="./images/background1.jpeg" />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text className="text-muted" style={{ fontSize: '12px' }}>{item.category}</Card.Text>
                                                <Card.Text style={{ fontSize: '13px' }}>
                                                    <span>Sizes available: </span>
                                                    {item.price_list.map(price => (
                                                        <span><em>{price.size}, </em></span>
                                                    ))}
                                                </Card.Text>
                                                <Button variant="secondary" style={{ margin: '5px' }}>Add to cart</Button>
                                                <Link to={`/menu/${item._id}`} style={{ margin: '5px' }}>
                                                    <Button variant="outline-primary" style={{ margin: '5px' }}>View details</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Fragment>
                            ))}
                        </Fragment>
                    )}
                </Row>
            </Container>
        </Fragment >
    )
}

export default Menu