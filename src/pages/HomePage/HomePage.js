import React from 'react';
import './HomePage.css';
import MyNavbar from '../../components/Navbar/Navbar';
import { Container , Row } from 'react-bootstrap';

function HomePage(props) {
    return (
        <div className = "homepage">
            <MyNavbar />
            {/* <Container className="home-container"> */}
                    <h1>Welcome To Movie App </h1>
             {/* </Container> */}
        </div>
    );
}

export default HomePage;