import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import React from "react";
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import Actors from './ActorsTemplate';

export default function NavbarMenu() {
    return (
        <Router>
            <div>
                <Navbar bg="#ebc52d" variant="light">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"}>Martian</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/actors"}>Actors</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/home" element={<Home/>}>
                    </Route>
                    <Route path="/actors" element={<Actors/>}>
                    </Route>
                    <Route path="/contact" element={<Contact/>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

