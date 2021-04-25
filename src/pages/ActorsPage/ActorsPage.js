import React, { useEffect, useState } from "react";
import Actor from "../../model/ActorModel/ActorModel";
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import ActorCard from "../../components/ActorCard/ActorCard";
import './ActorsPage.css';
import axios from "axios";
import img from '../../assets/images/BradleyCooper.jpg';
import actorsJson from '../../actors.json';
import MyNavbar from '../../components/Navbar/Navbar';


function ActorsPage({actors}) {

    const [filterText, setFilterText] = useState("");

    const [sortBy, setSortBy] = useState("firstName");

    // const [actors, setActors] = useState([]);

    // //  AJAX call to JSON actors file
    // useEffect(() => {

    //     setActors(actorsJson.map(plainActor => new Actor(plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.image, plainActor.imdbLink)));

    //     // axios.get("actors.json").then(response => {  
    //     //     setActors(response.data.map(plainActor => new Actor(plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.image, plainActor.imdbLink)));
    //     // }).catch( error => {
    //     //     console.error(error);
    //     // })
    // }, []);


    // filtering actors
    const filteredActors = actors.filter(actor => actor.firstName.toLowerCase().includes(filterText.toLowerCase()) || actor.lastName.toLowerCase().includes(filterText.toLowerCase()))

    // sorting actors
    filteredActors.sort((actor1, actor2) => {
        if (actor1[sortBy] > actor2[sortBy]) {
            return 1;
        } else if (actor1[sortBy] < actor2[sortBy]) {
            return -1;
        } else {
            return 0;
        }
    });

    // actors for display 
    const actorsCards = filteredActors.map(actor => <ActorCard actor={actor} />);

    return (
        <div>
            <MyNavbar />

            <Container className="actors-container">

                <Row className="title">
                    <h1>Actors Gallery</h1>
                </Row>
                <Form>
                    <Form.Row className="form-row">
                        <Form.Label className="label">Search</Form.Label>
                        <Form.Control type="text" className="filter" placeholder="Search..." value={filterText} onChange={e => setFilterText(e.target.value)} />
                        <Form.Label className="label">Sort By</Form.Label>
                        <Form.Control as="select" className="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="age">Age</option>
                        </Form.Control>
                    </Form.Row>
                </Form>
                {actors ?
                    <Row className="cards-div" xs={1} md={2} lg={5}>
                        {actorsCards}
                    </Row> :
                    <Spinner animation="border" />
                }
            </Container>
        </div>
    );
}

export default ActorsPage;