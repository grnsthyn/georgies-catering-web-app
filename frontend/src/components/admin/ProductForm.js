import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Form, Button, InputGroup, Card, Container } from "react-bootstrap"
import { createProduct, clearErrors } from "../../actions/productActions"
import FileBase from 'react-file-base64'

const ProductForm = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()

    const { success, loading, error } = useSelector(state => state.product)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (success) {
            alert.success("Product created.")
            navigate('/')
        }
    }, [dispatch, navigate, alert, success, error])

    const [small, setSmall] = useState(false)
    const [medium, setMedium] = useState(false)
    const [large, setLarge] = useState(false)
    //product details
    const [product, setProduct] = useState({
        name: '',
        price_list: [],
        image: '',
        category: '',
        available: true
    })
    const [smallDetails, setSmallDetails] = useState({
        size: 'Small',
        price: ''
    })
    const [mediumDetails, setMediumDetails] = useState({
        size: 'Medium',
        price: ''
    })
    const [largeDetails, setLargeDetails] = useState({
        size: 'Large',
        price: ''
    })

    //?insert na lang categories dito
    //!will get from categories table
    const categories = ["masarap", "mas masarap", "pinakamasarap", "pinakamarasarapimization"];

    const submitHandler = (e) => {
        e.preventDefault()

        if (small) {
            setProduct({ ...product, price_list: product.price_list.push(smallDetails) })
        }
        if (medium) {
            setProduct({ ...product, price_list: product.price_list.push(mediumDetails) })
        }
        if (large) {
            setProduct({ ...product, price_list: product.price_list.push(largeDetails) })
        }

        dispatch(createProduct(product))
    }

    return (
        <Fragment>
            <Container fluid>
                <Card style={{ width: '50rem', margin: 'auto', padding: '50px' }}>
                    <Card.Title>Add menu item</Card.Title>
                    <Card.Body>
                        <Form className="container" onSubmit={(e) => submitHandler(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Sizes</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Checkbox
                                        value={small}
                                        onChange={() => setSmall(!small)}
                                    />
                                    <Form.Control type="text" placeholder="Enter price for Small" value={smallDetails.price} onChange={e => setSmallDetails({ ...smallDetails, price: e.target.value })} disabled={small ? false : true} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Checkbox
                                        value={medium}
                                        onChange={() => setMedium(!medium)}
                                    />
                                    <Form.Control type="text" placeholder="Enter price for Medium" value={mediumDetails.price} onChange={e => setMediumDetails({ ...mediumDetails, price: e.target.value })} disabled={medium ? false : true} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Checkbox
                                        value={large}
                                        onChange={() => setLarge(!large)}
                                    />
                                    <Form.Control type="text" placeholder="Enter price for Large" value={largeDetails.price} onChange={e => setLargeDetails({ ...largeDetails, price: e.target.value })} disabled={large ? false : true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select size="md" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })}>
                                    <option>Select Category</option>
                                    {
                                        categories.map(cat => (
                                            <option>{cat}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formFileSm" className="mb-3">
                                {/* <Form.Label>Product Image</Form.Label>
                                <Form.Control type="file" size="md" /> */}
                                <FileBase type="file" value={product.image} onDone={({ base64 }) => setProduct({ ...product, image: base64 })} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={loading ? true : false}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

        </Fragment>
    )
}

export default ProductForm
