import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css';

function MovieCard({ movie }) {

    return (
        // <Card className = "movie-card">
        //     <Card.Img className="movieImg" variant="left" src={movie.poster} />    
        //     <Card.Body>
        //         <Card.Title>
        //                 {movie.movieName}
        //         </Card.Title>
        //         <Card.Text>Length In MInutes: {movie.lengthInMinutes}</Card.Text>
        //         <Card.Text>Director: {movie.director}</Card.Text>
        //         <Card.Text>Main Stars: {movie.mainStars}</Card.Text>
        //     </Card.Body>

        // </Card>
        <div className="movie-card">
            <img className="movieImg" src={movie.poster} />
            <div className="card-body">
                <h4 className="card-title">{movie.movieName}</h4>
                <p><span className="bold">Length In MInutes:</span> {movie.lengthInMinutes}</p>
                <p><span className="bold">Director:</span> {movie.director}</p>
                <p><span className="bold">Main Stars:</span> {movie.mainStars}</p>
            </div>
        </div>
    );
}

export default MovieCard;
