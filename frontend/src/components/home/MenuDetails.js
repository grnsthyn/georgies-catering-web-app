import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMenuDetails, clearErrors } from '../../actions/menuActions'
import { useParams } from "react-router-dom"
import { Container, Image, Row, Col, Button, Card } from 'react-bootstrap'

const MenuDetails = ({ match }) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { id } = useParams()

    const { loading, error, menu_item } = useSelector(state => state.menuDetails)

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [priceList, setPriceList] = useState([])
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (menu_item && menu_item._id !== id) {
            dispatch(getMenuDetails(id))
        } else if (menu_item) {
            setName(menu_item.name)
            setPriceList(menu_item.price_list)
            setImage(menu_item.image)
            setCategory(menu_item.category)
        } else {
            dispatch(getMenuDetails(id))
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, menu_item, id])

    return (
        <Fragment>
            <Container fluid>
                {loading ? <p>Loading...</p> : (
                    <Fragment>
                        <Row className="justify-content-md-center text-center" style={{ height: '50vh', margin: '50px auto',  }}>
                            <Col xs lg="5">
                                <Image style={{ marginLeft: 'auto' }} src="https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?b=1&k=20&m=1284690585&s=170667a&w=0&h=HlEPBNsYMVuu-SsohPliBWHJy-IhW9y-fl8dS9KnBBo=" fluid />
                            </Col>
                            <Col md="7">
                                <Card style={{width: '20rem'}}>
                                    <Card.Header as="h6" className="text-muted">Category: {category}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            {priceList && priceList.map(price => (
                                                <p>{price.size}: Php {price.price}</p>
                                            ))}
                                        </Card.Text>
                                        <Button variant="secondary" style={{ margin: '5px' }}>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Fragment>
                )}
            </Container>
        </Fragment>
    )
}

export default MenuDetails