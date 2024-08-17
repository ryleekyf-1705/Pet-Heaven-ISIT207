import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from './header';
import './home.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const imagePath = process.env.PUBLIC_URL + '/img/';

const Home = () => {
    const navigate = useNavigate();

    const goToGallery = () => {
        navigate('/gallery');
    };

    return (
        <div>
            <Header title="Pet Heaven" subtitle="Make a difference. For you and your next furkid." />

            <div className="info-section">
                <div className="text-content">
                    <h2>Adoption Gallery</h2>
                    <p>Discover our wide variety of adorable pets looking for a forever home. You can make a huge difference in their lives.</p>
                    <Button variant="primary" onClick={goToGallery}>Adoption Gallery</Button>
                </div>
                <div className="image-content">
                    <img src={imagePath + "dog_1.jpg"} alt="Adoptable Pet" />
                </div>
            </div>

            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How to Adopt</Accordion.Header>
                        <Accordion.Body>
                            <ol>
                                <li>Browse Our Pets: Explore our online gallery to find your new furry friend.</li>
                                <li>Apply to Adopt: Submit your adoption form online. We'll contact you once shortlisted.</li>
                                <li>Visit and Adopt: Meet your pet at our shelter and complete the adoption process.</li>
                                <address className="shelter-address">
                                    <strong>Pet Heaven Shelter:</strong><br />
                                    635A Tampines North Dr 2<br />
                                    Singapore, 521635
                                </address>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Things To Note</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Check our gallery regularly as pets are adopted on a first-come, first-served basis.</li>
                                <li>We conduct interviews to ensure suitable homes for our pets.</li>
                                <li>Contact us for post-adoption support as you welcome your new pet.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Adoption Fees</Accordion.Header>
                        <Accordion.Body>
                            Our adoption fees vary depending on the type of animal. This fee includes vaccinations, microchipping, spaying/neutering, and a veterinary check-up. The fees help us cover these medical expenses and support our shelter operations.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>FAQ</Accordion.Header>
                        <Accordion.Body>
                            <dl>
                                <dt>How can I prepare for my new pet?</dt>
                                <dd>Ensure your home is ready and consider the commitment needed.</dd>
                                <dt>What are the shelter's visiting hours?</dt>
                                <dd>Open from 10:00 am to 6:00 pm, Monday through Saturday. Visits by appointment only.</dd>
                                <dt>Can I volunteer at Pet Heaven Shelter?</dt>
                                <dd>Yes! Visit our 'Volunteer' section or contact us for more information on contributing.</dd>
                                <dt>When do new breeds of pets come in?</dt>
                                <dd>Keep an eye on our gallery for new available pets.</dd>
                            </dl>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;
