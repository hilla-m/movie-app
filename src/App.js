import React, { useEffect, useState } from "react";
import Actor from "../src/model/ActorModel/ActorModel";
import Movie from "../src/model/MovieModel/MovieModel";
import logo from './logo.svg';
import './App.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MyNavbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route , Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import moviesJson from '../src/movies.json';
import actorsJson from '../src/actors.json';


function App() {
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);


  //  AJAX call to JSON actors file
  useEffect(() => {

      setActors(actorsJson.map(plainActor => new Actor(plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.image, plainActor.imdbLink)));

      // axios.get("actors.json").then(response => {  
      //     setActors(response.data.map(plainActor => new Actor(plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.image, plainActor.imdbLink)));
      // }).catch( error => {
      //     console.error(error);
      // })
  }, []);

  //  AJAX call to JSON movies file
  useEffect(() => {
      setMovies(moviesJson.map(plainMovie => new Movie(plainMovie.movieName, plainMovie.lengthInMinutes, plainMovie.poster, plainMovie.director, plainMovie.mainStars)));
      // axios.get("movies.json").then(response => {  
      //     setMovies(response.data.map(plainMovie => new Movie(plainMovie.movieName, plainMovie.lengthInMinutes, plainMovie.poster, plainMovie.director, plainMovie.mainStars)));
      // }).catch( error => {
      //     console.error(error);
      // })
  }, []);


  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/actors">
            <ActorsPage actors={actors}/>
          </Route>
          <Route exact path="/movies">
            <MoviesPage movies={movies}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
