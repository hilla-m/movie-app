import React, { useState } from "react";
import Actor from "../../model/ActorModel/ActorModel";
import { Container, Row, Col, Form } from 'react-bootstrap';
import ActorCard from "../../components/ActorCard/ActorCard";
import './ActorsPage.css';
// import "../../assets/images/BradleyCooper.jpg";  //not working

function ActorsPage(props) {

    const [filterText, setFilterText] = useState("");

    const [sortBy, setSortBy] = useState("");

    const [actors, setActors] = useState([
        new Actor("Johnny", "Depp", "June 9, 1963", "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000136/"),
        new Actor("Ben", "Affleck", "Augost 15, 1972", "https://m.media-amazon.com/images/M/MV5BMzczNzNiMDAtMmUzZS00MTkwLWIwOTYtNmYyNjg3MTVkNThhXkEyXkFqcGdeQXVyMjA4MjI5MTA@._V1_UY317_CR12,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000255/"),
        new Actor("Emma", "Stone", "November 6, 1988", "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1297015/"),
        new Actor("Ryan", "Gosling", "November 12, 1980", "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY317_CR18,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0331516/"),
        new Actor("Charlize", "Theron", "August 7, 1975", "https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000234/"),
        new Actor("Bradley", "Cooper", "January 5, 1975", "https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0177896/")
    ]);

    //src/assets/images/BradleyCooper.jpg   // ../../assets/images/BradleyCooper.jpg   //path not working

    let actorsCards = actors.map(actor => <ActorCard actor={actor} />);    //className={checkFilter(actor) ? "show" : "hide"} 

    // function checkFilter(actor) {
    //     if (filterText === "" || actor.firstName.toLowerCase().includes(filterText.toLowerCase()) || actor.lastName.toLowerCase().includes(filterText.toLowerCase())) {
    //         return true;
    //     }
    //     return false;
    // }



function checkFilter(value) {
    debugger;
    setFilterText(value);

        let filteredActors = actors.filter(actor => actor.firstName.toLowerCase().includes(value.toLowerCase()) || actor.lastName.toLowerCase().includes(value.toLowerCase()))

        setActors(filteredActors);
        actorsCards = actors.map(actor => <ActorCard actor={actor} />);     
}


function checkSortBy(value) {
    setSortBy(value);
    let sortedActors = [];

    if (value === "firstName") {
        sortedActors = actors.sort(function (a, b) {
            if (a.firstName.toUpperCase() < b.firstName.toUpperCase()) {
                return -1;
            }
            if (a.firstName.toUpperCase() > b.firstName.toUpperCase()) {
                return 1;
            }
            return 0;
        });
    }

    if (value === "lastName") {
        sortedActors = actors.sort(function (a, b) {
            if (a.lastName.toUpperCase() < b.lastName.toUpperCase()) {
                return -1;
            }
            if (a.lastName.toUpperCase() > b.lastName.toUpperCase()) {
                return 1;
            }
            return 0;
        });
    }

    if (value === "age") {
        sortedActors = actors.sort(function (a, b) {
            return a.age - b.age;
        });
    }

    setActors(sortedActors);
    actorsCards = actors.map(actor => <ActorCard actor={actor} />);
}


return (
    <Container className="container">
        <Row className="title">
            <h1>Actors Gallery</h1>
        </Row>
        <Form>
            <Form.Row class="form-row">
                <Form.Label className="label">Search</Form.Label>
                {/* <Form.Control type="text" className="filter" placeholder="Search..." value={filterText} onChange={e => setFilterText(e.target.value)} /> */}
                <Form.Control type="text" className="filter" placeholder="Search..." value={filterText} onChange={e => checkFilter(e.target.value)} />
                <Form.Label className="label">Sort By</Form.Label>
                {/* <Form.Control as="select" className="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}> */}
                <Form.Control as="select" className="sort" value={sortBy} onChange={e => checkSortBy(e.target.value)}>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="age">Age</option>
                </Form.Control>
            </Form.Row>
        </Form>
        <Row className="cards-div" xs={1} md={2} lg={4}>
            {actorsCards}
        </Row>
    </Container>
);
}

export default ActorsPage;