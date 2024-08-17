import React, { useState } from 'react';
import Header from './header';
import { Card, Button, Form, Row, Col, Container, Alert } from 'react-bootstrap';
import './register.css';
import { useNavigate } from 'react-router-dom';
import usersData from '../db/user.json';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const navigate = useNavigate();

    const isUsernameTaken = (newUsername) => {
        return usersData.users.some((user) => user.username === newUsername);
    };

    const handleRegister = (event) => {
        event.preventDefault();
        // No need to check form validity here, since you're doing custom validation
        if (password !== confirmPassword) {
            setRegisterError('Passwords do not match.');
            setRegisterSuccess(false);
        } else if (isUsernameTaken(username)) {
            setRegisterError('Username is already in use, please use a different username.');
            setRegisterSuccess(false);
        } else {
            // Assuming registration success
            setRegisterSuccess(true);
            setRegisterError('');
            // Add the new user to the users array or database here
            // Redirect user after successful registration
            setTimeout(() => navigate('/login'), 3000);
        }
    };
    

    return (
        <div>
            <Header title="Register" subtitle="Create your account at Pet Heaven." />
            <section>
                <Container className="py-5 h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col xl={10}>
                            <Card className="text-black">
                                <Row className="g-0">
                                    <Col lg={6}>
                                        <Card.Body className="p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <h4 className="mt-1 mb-5 pb-1">Join Pet Heaven</h4>
                                            </div>

                                            <Form noValidate validated={registerSuccess} onSubmit={handleRegister}>
                                                <p>Create your account</p>

                                                <Form.Group className="mb-4" controlId="formBasicName">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Name"
                                                        required
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicUsername">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Username"
                                                        required
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        required
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        required
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <div className="text-center">
                                                    <Button variant="outline-dark" type="submit">Register</Button>
                                                </div>
                                            </Form>

                                            {registerError && (
                                                <Alert variant="danger" className="mt-3">
                                                    {registerError}
                                                </Alert>
                                            )}

                                            {registerSuccess && (
                                                <Alert variant="success" className="mt-3">
                                                    Registration successful. Redirecting to login page.
                                                </Alert>
                                            )}

                                        </Card.Body>
                                    </Col>
                                    <Col lg={6} className="d-flex align-items-center gradient-custom-2">
                                        <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Why Join Pet Heaven?</h4>
                                            <p className="small mb-0">
                                                By joining Pet Heaven, you're taking a step towards giving a loving home to a pet in need. Our platform connects you with pets looking for their forever home.
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

export default Register;
