import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Gallary.css'; 

const mediaItems = {
    photos: [
        {
            src: 'https://www.ymcacva.org/sites/default/files/styles/media_full/public/2019-09/school-age-soccer.jpg?itok=sxphrAGo',
            caption: 'Students participating in various sports events.'
        },
        {
            src: 'https://www.ppic.org/wp-content/uploads/elementary-school-students-working-on-a-science-experiment.jpg',
            caption: 'Students presenting their science projects.'
        },
        {
            src: 'https://4.bp.blogspot.com/-W1XpVh003NU/UIItoeB_foI/AAAAAAAAHjo/N8UJi37JBuA/s1600/55.jpg',
            caption: 'Students performing in the cultural fest.'
        },
        {
            src: 'https://www.i3-technologies.com/media/yqqkblqy/21090301rep0017-1.jpg',
            caption: 'A glimpse of our interactive classrooms.'
        },
        {
            src: 'https://c8.alamy.com/comp/KX366D/2-indian-school-kids-students-reading-book-studying-in-library-KX366D.jpg',
            caption: 'Students reading and studying in the school library.'
        }
    ],
    videos: [
        {
           src: 'https://www.youtube.com/embed/IMbrSAxk3ts?si=DTqwtdt01nHdRzfg',
            caption: 'Virtual tour of Springdale Public School.',
            type: 'iframe'
        },
        {
            src: 'https://www.youtube.com/embed/TBTVnrotxJo?si=8E36cTJuoAz089Hh',
            caption: 'Highlights from the Annual Function 2023.',
            type:'iframe'
        }
    ]
};

const Gallary = () => {
    return (
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1 className="display-4 animated-heading">Media Gallery</h1>
                <p className="lead animated-text">Explore photos and videos capturing the essence of life at Springdale.</p>
            </div>

            <section className="mb-5">
                <h2 className="section-title">Photos</h2>
                <Row>
                    {mediaItems.photos.map((item, index) => (
                        <Col md={4} sm={6} className="mb-4" key={index}>
                            <Card className="custom-card animated-card">
                                <Card.Img variant="top" src={item.src} className="card-image" />
                                <Card.Body>
                                    <Card.Text>{item.caption}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Videos</h2>
                <Row>
                    {mediaItems.videos.map((item, index) => (
                        <Col md={6} sm={12} className="mb-4" key={index}>
                            <Card className="custom-card animated-card">
                                {item.type === 'iframe' ? (
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={item.src}
                                        title="Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <video controls className="video-responsive">
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                <Card.Body>
                                    <Card.Text>{item.caption}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    );
}

export default Gallary;







