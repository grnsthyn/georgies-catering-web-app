import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllMenu, clearErrors } from '../../actions/menuActions'
// import { useNavigate } from "react-router-dom"
import { Container } from 'react-bootstrap'

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
            <Container fluid>
                <h1>Menu</h1>
                {loading ? <p>Loading...</p> : (
                    <Fragment>
                        { menu && menu.map(item => (
                            <Fragment>
                                <p>{item.name}</p>
                                {item.price_list.map(price => (
                                    <p>{price.size} - {price.price}</p>
                                ))}
                                <p>{item.category}</p>
                                <Link to={`/menu/${item._id}`}>View item</Link>
                            </Fragment>
                        ))}
                    </Fragment>
                )}
            </Container>
        </Fragment>
    )
}

export default Menu