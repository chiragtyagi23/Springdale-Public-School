import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import './Aboutus.css';

const About = () => {
  return (
    <>
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4">About Us</h1>
                <p className="lead">Learn more about Springdale Public School</p>
            </div>

            <Row>
                <Col md={6} className="mb-4">
                    <h2 className="highlight">History</h2>
                    <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
                </Col>

                <Col md={6} className="mb-4">
                    <h2 className="highlight">Vision</h2>
                    <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
                </Col>

                <Col md={6} className="mb-4">
                    <h2 className="highlight">Mission</h2>
                    <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
                </Col>

                <Col md={6} className="mb-4">
                    <h2 className="highlight">Principal's Message</h2>
                    <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
                </Col>

                <Col md={12} className="mb-4">
                    <h2 className="highlight">Infrastructure and Facilities</h2>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check-circle text-success"></i> State-of-the-art science and computer labs</li>
                        <li><i className="bi bi-check-circle text-success"></i> Spacious and well-equipped classrooms</li>
                        <li><i className="bi bi-check-circle text-success"></i> Library with a vast collection of books and digital resources</li>
                        <li><i className="bi bi-check-circle text-success"></i> Sports facilities including a playground, gymnasium, and swimming pool</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default About
