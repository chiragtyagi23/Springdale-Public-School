import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Faculty.css'; 

const facultyMembers = [
    {
        name: 'John Doe',
        title: 'Principal',
        degree: 'M.Ed',
        experience: '20 years of experience in educational administration',
        image: 'https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d' 
    },
    {
        name: 'Jane Smith',
        title: 'Vice Principal',
        degree: 'M.Sc. in Physics',
        experience: '15 years of teaching experience',
        image: 'https://photocatchthemoment.com/wp-content/uploads/2016/01/business_headshot_linkedIn_profile-picture_Dublin_Rafael-Photography.jpg'
    },
    {
        name: 'Emily Johnson',
        title: 'English Teacher',
        degree: 'M.A. in English',
        experience: '10 years of teaching experience',
        image: 'https://angelgrayphotography.com/wp-content/uploads/2018/04/AGP_0844-copy.jpg' 
    },
    {
        name: 'Michael Brown',
        title: 'Mathematics Teacher',
        degree: 'M.Sc. in Mathematics',
        experience: '8 years of teaching experience',
        image: 'https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d' 
    },
    {
        name: 'Sophia Davis',
        title: 'Science Teacher',
        degree: 'M.Sc. in Chemistry',
        experience: '12 years of teaching experience',
        image: 'https://thumbs.dreamstime.com/b/confident-indian-business-woman-21143444.jpg' 
    },
    {
        name: 'David Wilson',
        title: 'Computer Science Teacher',
        degree: 'B.Tech in Computer Science',
        experience: '5 years of teaching experience',
        image: 'https://i.pinimg.com/originals/7a/b1/f1/7ab1f1e0c59bfd080af258b31d9462cd.jpg'
    },
];

const Faculty = () => {
    return (
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4 animated-heading">Meet Our Faculty</h1>
                <p className="lead animated-text">Learn more about the talented individuals who make up our team.</p>
            </div>

            <Row>
                {facultyMembers.map((member, index) => (
                    <Col md={4} sm={6} className="mb-4" key={index}>
                        <Card className="custom-card animated-card">
                            <Card.Img variant="top" src={member.image} className="card-image" />
                            <Card.Body>
                                <Card.Title className="card-title">{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Degree:</strong> {member.degree}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Experience:</strong> {member.experience}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Faculty;
