import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Academics from './components/Academics';
import Admission from './components/Admission';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallary from './components/Gallary';
import Pagenotfound from './components/Pagenotfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 


const Navpage = () => {
  return (
    
    <BrowserRouter>
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom "><img src="https://media.glassdoor.com/sqll/314518/springdale-public-schools-squarelogo-1451459796447.png" alt="logo"  style={{ height: '40px', width: '40px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom mx-3">
              AboutUs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom mx-3">
              ContactUs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/academics" className="nav-link-custom mx-3">
              Academics
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admission" className="nav-link-custom mx-3">
              Admission
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faculty" className="nav-link-custom mx-3">
              Faculty
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student" className="nav-link-custom mx-3">
              Students
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallary" className="nav-link-custom mx-3">
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/student" element={<Students />} />
      <Route path="/gallary" element={<Gallary />} />
      <Route path="/*" element={<Pagenotfound />} />
    </Routes>
  </BrowserRouter>
        
    
  )
}

export default Navpage
