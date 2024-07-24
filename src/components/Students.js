import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Students.css';

const Students = () => {
    return (
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4 animated-heading">Life at Springdale</h1>
                <p className="lead animated-text">Discover the vibrant life at our school, where students engage in various activities and achieve remarkable success.</p>
            </div>

            <section className="mb-5">
                <h2 className="section-title">Extracurricular Activities</h2>
                <Row>
                    <Col md={6}>
                        <Card className="custom-card animated-card">
                            <Card.Body>
                                <Card.Title className="card-title">Extracurricular Activities</Card.Title>
                                <Card.Text>
                                    Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Clubs and Societies</h2>
                <Row>
                    <Col md={6}>
                        <Card className="custom-card animated-card">
                            <Card.Body>
                                <Card.Title className="card-title">Clubs and Societies</Card.Title>
                                <Card.Text>
                                    Literary Society, Environmental Club, Astronomy Club, Coding Club
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Achievements</h2>
                <Row>
                    <Col md={6}>
                        <Card className="custom-card animated-card">
                            <Card.Body>
                                <Card.Title className="card-title">Achievements</Card.Title>
                                <ul>
                                    <li>John Smith - National Level Math Olympiad Winner</li>
                                    <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                                    <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Student Council</h2>
                <Row>
                    <Col md={6}>
                        <Card className="custom-card animated-card">
                            <Card.Body>
                                <Card.Title className="card-title">Student Council</Card.Title>
                                <ul>
                                    <li><strong>President:</strong> Amy Parker, Grade 12</li>
                                    <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
                                    <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default Students;

