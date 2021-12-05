import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

const ProductForm = () => {

    const [smallDetails, setSmallDetails] = useState({
        size: 'Small',
        checked: false,
        price: ''
    });

    const [mediumDetails, setMediumDetails] = useState({
        size: 'Medium',
        checked: false,
        price: ''
    });

    const [largeDetails, setLargeDetails] = useState({
        size: 'Large',
        checked: false,
        price: ''
    })

    //product details
    const [product, setProduct] = useState({
        name: '',
        priceList: [],
        image: '',
        category: '',
        user: ''
    });

    // if nakacheck saka lang lalabas yung input
    const isChecked = (size, setSize) => (
        (size.checked && size.checked) &&
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{size.name} Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price" value={size.price} onChange={(e) => setSize({ ...size, price: e.target.value })} />
        </Form.Group>
    )

    //insert na lang categories dito
    const categories = ["masarap", "mas masarap", "pinakamasarap", "pinakamarasarapimization"];

    const submitHandler = (e) => {
        e.preventDefault();

        if (smallDetails.checked) {
            const list = {
                size: smallDetails.size,
                price: smallDetails.price
            }
            setProduct({ ...product, priceList: product.priceList.push(list) })
        }
        if (mediumDetails.checked) {
            const list = {
                size: smallDetails.size,
                price: smallDetails.price
            }
            setProduct({ ...product, priceList: product.priceList.push(list) })
        }
        if (largeDetails.checked) {
            const list = {
                size: smallDetails.size,
                price: smallDetails.price
            }
            setProduct({ ...product, priceList: product.priceList.push(list) })
        }
        console.log(product)

    }


    return (
        <Form className="container" onSubmit={(e) => submitHandler(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" value={product.size} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sizes</Form.Label>
                <Form.Check
                    inline
                    label="Small"
                    name="pricelist"
                    type="checkbox"
                    id="small"
                    onChange={() => setSmallDetails({ ...smallDetails, checked: !smallDetails.checked })}
                    value={smallDetails?.checked}
                />
                <Form.Check
                    inline
                    label="Medium"
                    name="pricelist"
                    type="checkbox"
                    id="medium"
                    onChange={() => setMediumDetails({ ...mediumDetails, checked: !mediumDetails.checked })}
                    value={mediumDetails?.checked}
                />
                <Form.Check
                    inline
                    label="Large"
                    name="pricelist"
                    type="checkbox"
                    id="large"
                    onChange={() => setLargeDetails({ ...largeDetails, checked: !largeDetails.checked })}
                    value={largeDetails?.checked}
                />
            </Form.Group>

            {
                isChecked(smallDetails, setSmallDetails)
            }
            {
                isChecked(mediumDetails, setMediumDetails)
            }
            {
                isChecked(largeDetails, setLargeDetails)
            }

            <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" size="md" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ProductForm
