import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import './MoviesPage.css';
import axios from "axios";
import moviesJson from '../../movies.json';
import MovieCard from "../../components/MovieCard/MovieCard";
import Movie from "../../model/MovieModel/MovieModel";

function MoviesPage(props) {

    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy] = useState("movieName");
    const [movies, setMovies] = useState([]);

  //  AJAX call to JSON movies file
    useEffect(() => {
    setMovies(moviesJson.map(plainMovie => new Movie(plainMovie.movieName, plainMovie.lengthInMinutes, plainMovie.poster, plainMovie.director, plainMovie.mainStars)));
        // axios.get("movies.json").then(response => {  
        //     setMovies(response.data.map(plainMovie => new Movie(plainMovie.movieName, plainMovie.lengthInMinutes, plainMovie.poster, plainMovie.director, plainMovie.mainStars)));
        // }).catch( error => {
        //     console.error(error);
        // })
    },[]);

    // filtering movies
        const filteredMovies = movies.filter(movie => movie.movieName.toLowerCase().includes(filterText.toLowerCase()));

    // sorting movies
    filteredMovies.sort((movie1, movie2) => {
        if (movie1[sortBy] > movie2[sortBy]) {
            return 1;
        } else if (movie1[sortBy] < movie2[sortBy]) {
            return -1;
        } else {
            return 0;
        }
    });

    // actors for display 
    const moviesCards = filteredMovies.map(movie => <MovieCard movie={movie} />);

    return (
        <Container className="movies-container">
            <Row className="title">
                <h1>Movies</h1>
            </Row>
            <Form>
                <Form.Row className="form-row">
                    <Form.Label className="label">Search</Form.Label>
                    <Form.Control type="text" className="filter" placeholder="Search..." value={filterText} onChange={e => setFilterText(e.target.value)} />
                    <Form.Label className="label">Sort By</Form.Label>
                    <Form.Control as="select" className="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="movieName">Movie Name</option>
                        <option value="director">Director</option>
                        <option value="mainStars">Main Stars</option>
                    </Form.Control>
                </Form.Row>
            </Form>
            { movies ?
                <Row className="cards-div" xs={1} md={1} lg={1}>
                {moviesCards}
            </Row> :
            <Spinner animation="border"/>
            }
        </Container>
    );
}

export default MoviesPage;