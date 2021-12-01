import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { login, clearErrors } from '../../actions/authActions'

const Login = ({ history }) => {
    const alert = useAlert()
    const dispatch = useDispatch()

    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if(isAuthenticated) {
            alert.success("Logged in successfully.")
            history.push('/')
        }
    }, [dispatch, history, alert, error, isAuthenticated])

    const submitHandler = e => {
        e.preventDefault()

        dispatch(login({email, password}))
    }

    return (
        <Fragment>
            <Container fluid style={{ paddingTop: '50px' }}>
                <Card style={{ width: '25rem', margin: 'auto' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={loading ? true : false}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
    )
}

export default Login