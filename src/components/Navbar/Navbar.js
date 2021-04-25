import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';


function MyNavbar(props) {
    
    return (
        <Navbar className="my-navbar" bg="dark" variant="dark">
            <Navbar.Brand href="#/home">Movie App</Navbar.Brand>
            <Nav className="mr-auto bg-dark" >
                <Nav.Link href="#/home">Home</Nav.Link>
                <Nav.Link href="#/actors">Actors</Nav.Link>
                <Nav.Link href="#/movies">Movies</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default MyNavbar;