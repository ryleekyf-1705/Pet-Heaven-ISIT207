import React, { useState, useContext, useEffect } from 'react';
import Header from './header';
import { Card, Button, Form, Row, Col, Container, Alert } from 'react-bootstrap';
import usersData from '../db/user.json';
import './login.css';
import { AuthContext } from './auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = usersData.users.find((u) => u.username === username && u.password === password);
        if (user) {
            login(user);
            setLoggedInUser(user.name);
            setLoginSuccess(true);
            setLoginError(false);
        } else {
            setLoginError(true);
            setLoginSuccess(false);
        }
    };

    useEffect(() => {
        if (loginSuccess) {
            // Redirect user after 3 seconds
            const timer = setTimeout(() => navigate('/'), 3000);
            return () => clearTimeout(timer); // Clean up the timeout on component unmount
        }
    }, [loginSuccess, navigate]);

    const redirectToRegister = () => {
        navigate('/register'); // Path to your register page
    };    

    return (
        <div>
            <Header title="Login" subtitle="Join Pet Heaven and start your adoption journey today." />
            <section>
                <Container className="py-5 h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col xl={10}>
                            <Card className="text-black">
                                <Row className="g-0">
                                    <Col lg={6}>
                                        <Card.Body className="p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <h4 className="mt-1 mb-5 pb-1">Welcome to Pet Heaven</h4>
                                            </div>

                                            <Form onSubmit={handleLogin}>
                                                <p>Please login to your account</p>

                                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Username"
                                                        onChange={handleUsernameChange}
                                                        isInvalid={loginError}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Incorrect username or password.
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        onChange={handlePasswordChange}
                                                        isInvalid={loginError}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Incorrect username or password.
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <div className="text-center pt-1 mb-1 pb-1">
                                                    <Button variant="outline-dark" type="submit">Log in</Button>
                                                </div>
                                            </Form>

                                            {loginError && (
                                                <Alert variant="danger" className="mt-3">
                                                    Login failed: Incorrect username or password.
                                                </Alert>
                                            )}

                                            {loginSuccess && (
                                                <Alert variant="success" className="mt-3">
                                                    Welcome {loggedInUser}! Redirecting to Homepage.
                                                </Alert>
                                            )}

                                            <div className="text-center pt-1 mb-2 pb-1">
                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <Button variant="outline-dark" onClick={redirectToRegister}>Create new</Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                    <Col lg={6} className="d-flex align-items-center gradient-custom-2">
                                        <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Become a part of our community</h4>
                                            <p className="small mb-0">
                                                Join us at Pet Heaven and find a furry friend to bring home. Our platform offers a seamless adoption process to connect you with animals in need of a loving home.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Login;
