import React from 'react';
import { Card } from 'react-bootstrap';
import './ActorCard.css';

function ActorCard({ actor }) {

    return (
        <Card className = "actor-card">
            <Card.Img className="actorImg" variant="top" src={actor.image} />
            <Card.Body>
                <Card.Title>
                    <a className="imdbLink" href={actor.imdbLink} target="_blank">
                        {actor.firstName} {actor.lastName}
                    </a>
                </Card.Title>
                <Card.Text>Age: {actor.age}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ActorCard;
