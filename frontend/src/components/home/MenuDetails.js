import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMenuDetails, clearErrors } from '../../actions/menuActions'
import { useParams } from "react-router-dom"
import { Container } from 'react-bootstrap'

const MenuDetails = ({ match }) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {id} = useParams()

    const { loading, error, menu_item } = useSelector(state => state.menuDetails)

    const [name, setName] = useState('')
    const [priceList, setPriceList] = useState([])
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (menu_item && menu_item._id !== id) {
            dispatch(getMenuDetails(id))
        } else if (menu_item) {
            setName(menu_item.name)
            setPriceList(menu_item.price_list)
            setCategory(menu_item.category)
        } else {
            dispatch(getMenuDetails(id))
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, id])

    return (
        <Fragment>
            <Container fluid>
                <h1>Menu</h1>
                {loading ? <p>Loading...</p> : (
                    <Fragment>
                        <p>{name}</p>
                        {priceList && priceList.map(price => (
                            <p>{price.size} - {price.price}</p>
                        ))}
                        <p>{category}</p>
                        {/* <Link to={`/menu/${item._id}`}>View item</Link> */}
                    </Fragment>
                )}
            </Container>
        </Fragment>
    )
}

export default MenuDetails