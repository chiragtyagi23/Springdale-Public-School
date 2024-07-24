import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
    };

    return (
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4">Contact Us</h1>
                <p className="lead">Get in touch with us for any queries or feedback</p>
            </div>

            <Row>
                <Col md={6} className="mb-4">
                    <h2 className="highlight">Contact Details</h2>
                    <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
                </Col>

                <Col md={6} className="mb-4">
                    <h2 className="highlight">Contact Form</h2>
                    {showAlert && (
                        <Alert variant="success">
                            Your message has been sent successfully!
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col md={12} className="mb-4">
                    <h2 className="highlight">Our Location</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4087582718697!2d-122.418261084681!3d37.77992697975803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064eb64729d%3A0x83e460f7b11d5821!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1627399477751!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

