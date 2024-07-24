import React from 'react'
import { Container,Row,Accordion,Col } from 'react-bootstrap'

const Academics = () => {
  return (
    <>
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4">Academics</h1>
                <p className="lead">Explore our curriculum and teaching methodologies</p>
            </div>

            <Row>
                <Col md={12} className="mb-4">
                    <h2 className="highlight">Curriculum</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Primary (Grades 1-5)</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>English</li>
                                    <li>Mathematics</li>
                                    <li>Science</li>
                                    <li>Social Studies</li>
                                    <li>Art</li>
                                    <li>Physical Education</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Secondary (Grades 6-10)</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>English</li>
                                    <li>Mathematics</li>
                                    <li>Science (Physics, Chemistry, Biology)</li>
                                    <li>Social Studies</li>
                                    <li>Computer Science</li>
                                    <li>Physical Education</li>
                                    <li>Art</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Senior Secondary (Grades 11-12)</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><strong>Science Stream:</strong>
                                        <ul>
                                            <li>Physics</li>
                                            <li>Chemistry</li>
                                            <li>Biology</li>
                                            <li>Mathematics</li>
                                            <li>Computer Science</li>
                                            <li>English</li>
                                        </ul>
                                    </li>
                                    <li><strong>Commerce Stream:</strong>
                                        <ul>
                                            <li>Accountancy</li>
                                            <li>Business Studies</li>
                                            <li>Economics</li>
                                            <li>Mathematics</li>
                                            <li>English</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col md={12} className="mb-4">
                    <h2 className="highlight">Teaching Methodologies</h2>
                    <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
                </Col>

                <Col md={12} className="mb-4">
                    <h2 className="highlight">Educational Resources</h2>
                    <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Academics
