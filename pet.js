import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './header';
import animalsData from '../db/animal.json';
import { Button, Modal, Form } from 'react-bootstrap';
import "./pet.css";

const Pet = () => {
    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const { animalId } = useParams();
    const allAnimals = [].concat(animalsData.cats, animalsData.dogs, animalsData.hamsters, animalsData.rabbits);
    const animal = allAnimals.find(animal => animal.id.toString() === animalId);
    const imagePath = process.env.PUBLIC_URL + '/img/';
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setShowModal(false);
        setValidated(false);
        setSubmitMessage('');
    };
    const handleShowModal = () => setShowModal(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setSubmitMessage(`Thank you for your interest in adopting ${animal.name}, we will get back to you soon!`);
            // Here you can also handle the form submission to your backend
        }
        setValidated(true);
    };

    if (!animal) {
        return <div>Animal not found</div>;
    }

    const handleBackToGallery = () => navigate('/gallery'); // Navigate back to the gallery 

    return (
        <div>
            <Header title={animal.name} subtitle="Your Potential New Family Member" />
            <div className="animal-details-container">
                <div className="animal-image">
                    <img src={imagePath + animal.image_url} alt={animal.name} />
                </div>
                <div className="animal-info">
                    <h1>{animal.name}</h1>
                    <p>Gender: {animal.gender}</p>
                    <p>Age: {animal.age} years</p>
                    <p>Type: {animal.type}</p>
                    <p className="animal-description">{animal.description}</p>
                    <div className="button-container">
                        <Button variant="secondary" onClick={handleBackToGallery}>Back to Adoption Gallery</Button>
                        <Button variant="primary" onClick={handleShowModal}>Adopt {animal.name}</Button>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Adopt {animal.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitMessage ? <p>{submitMessage}</p> : (
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your email address.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAdoptionReason">
                                <Form.Label>Tell us why you want to adopt {animal.name}</Form.Label>
                                <Form.Control as="textarea" rows={3} required />
                                <Form.Control.Feedback type="invalid">
                                    Please tell us why you want to adopt {animal.name}.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit Application
                            </Button>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Pet;
