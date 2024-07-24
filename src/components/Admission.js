import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Admission.css'

const Admission = () => {
  return (
   <>
     <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4 animated-heading">Admission Information</h1>
                <p className="lead animated-text">Everything you need to know about the admission process at Springdale Public School</p>
            </div>

            <Row>
                <Col md={6} className="mb-4">
                    <Card className="custom-card">
                        <Card.Header className="custom-card-header">Admission Process</Card.Header>
                        <Card.Body>
                            <Card.Text className="animated-text">
                                Admission forms are available for download. Submit the completed form along with required documents at the school office.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card className="custom-card">
                        <Card.Header className="custom-card-header">Admission Criteria</Card.Header>
                        <Card.Body>
                            <Card.Text className="animated-text">
                                Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={12} className="mb-4">
                    <Card className="custom-card">
                        <Card.Header className="custom-card-header">Important Dates</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="custom-list-group-item">Admission Form Availability: March 1st</ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item">Last Date for Submission: March 31st</ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item">Entrance Test: April 15th</ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item">Announcement of Results: April 30th</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
   </>
  )
}

export default Admission
