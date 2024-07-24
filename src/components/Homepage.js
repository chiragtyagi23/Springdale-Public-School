import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './Homepage.css'; 

const HomePage = () => {
    return (
        <>
      <Container fluid className="home-page">
      {/* Introduction Section */}
      <section className="intro-section text-center">
          <img 
              src="https://spsef.org/wp-content/uploads/2013/12/b332a7c1333f2b01998cb3a13e3fa434.gif"
              alt="School Logo"
              className="logo-image"
          />
          <h1 className="intro-heading">Welcome to Springdale Public School</h1>
          <p className="intro-text">Where we nurture young minds for a brighter future.</p>
      </section>

      {/* Carousel/Banner Highlights */}
      <section className="carousel-section">
          <Carousel>
              <Carousel.Item>
                  <div className="carousel-image-container">
                      <img
                          className="d-block w-100"
                          src="https://ibsb.ro/wp-content/uploads/2018/10/sports-day-2018-855.jpg"
                          alt="Annual Sports Day"
                      />
                  </div>
                  <Carousel.Caption className="carousel-caption">
                      <h3>Annual Sports Day</h3>
                      <p>Celebrating Excellence in Sports</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <div className="carousel-image-container">
                      <img
                          className="d-block w-100"
                          src="https://www.universalschool.id/images/gallery/9/1607008948-science-exhibition-27.jpg"
                          alt="Science Exhibition"
                      />
                  </div>
                  <Carousel.Caption className="carousel-caption">
                      <h3>Science Exhibition</h3>
                      <p>Showcasing Student Innovations</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <div className="carousel-image-container">
                      <img
                          className="d-block w-100"
                          src="https://i.ytimg.com/vi/Gd3eVFyLHe0/maxresdefault.jpg"
                          alt="Cultural Fest"
                      />
                  </div>
                  <Carousel.Caption className="carousel-caption">
                      <h3>Cultural Fest</h3>
                      <p>Embracing Diversity and Creativity</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </section>

      {/* Additional Section */}
      <section className="additional-section text-center mt-5">
          <Row>
              <Col md={4}>
                  <Card className="animated-card">
                      <Card.Body>
                          <h2 className="card-title">Our Mission</h2>
                          <p>Empowering students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card className="animated-card">
                      <Card.Body>
                          <h2 className="card-title">Our Vision</h2>
                          <p>Creating a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card className="animated-card">
                      <Card.Body>
                          <h2 className="card-title">Join Us</h2>
                          <p>Be a part of our vibrant school community and help shape the future.</p>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </section>

      {/* Footer */}
      
  </Container>
  <footer className="bg-dark text-white">
  <div className="container ">
    <div className="row">
      <div className="col-md-4 style">
        <h5>About Us</h5>
        <p className="footer-paragraph">
          Springdale Public School is committed to fostering academic excellence and personal growth in a supportive and inclusive environment.
        </p>
      </div>
      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-decoration-none">Home</a></li>
          <li><a href="/about" className="text-decoration-none">About Us</a></li>
          <li><a href="/academics" className="text-decoration-none">Academics</a></li>
          <li><a href="/contact" className="text-decoration-none">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <address>
          <p className="footer-paragraph">123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="footer-paragraph">Phone: +1 (123) 456-7890</p>
          <p className="footer-paragraph">Email: <a href="mailto:info@springdale.edu" className="text-decoration-none">info@springdale.edu</a></p>
        </address>
      </div>
    </div>
  </div>
  <div className="footer-bottom text-center ">
    <p className="footer-paragraph">&copy; {new Date().getFullYear()} Springdale Public School. All Rights Reserved.</p>
  </div>
</footer>

  
  </>
    );
}

export default HomePage;

