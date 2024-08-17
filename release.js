import React, { useState } from 'react';
import Header from './header';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import "./release.css";

const Release = () => {
    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => {
        // Reset the form when the modal is closed
        document.getElementById("releaseForm").reset();
        setShowModal(false);
        setValidated(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            // If form is valid, show the modal
            setShowModal(true);
        } else {
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div>
            <Header title="Release" subtitle="Ensure Your Pet's Future Happiness" />
            <div className="release-container">
                <Form noValidate validated={validated} onSubmit={handleSubmit} id="releaseForm">
                    <h1>Pet Release Request Form</h1>

                    <Form.Group className="mb-3" controlId="petName">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter pet's name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a pet name.
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Pet Image</Form.Label>
                        <Form.Control type="file" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your pet's image.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your first name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your address.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your unit.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your city.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your state.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control placeholder="Postal Code" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your postal code.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridReason">
                        <Form.Label>Reason for Releasing</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Reason for Releasing" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a reason for releasing your pet.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="By submitting you declare that all information entered are accurate."
                            required
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your submission has been received.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Release;
