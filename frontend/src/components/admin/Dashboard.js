import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <Fragment>
            <Container fluid>
                <Link to='/admin/new/product'>Add new product</Link>
            </Container>
        </Fragment>
    )
}

export default Dashboard
