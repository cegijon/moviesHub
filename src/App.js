import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Main } from './AppStyled';

const MovieContainer = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const Movie = styled.article`
width: 180px;
margin: 20px;

img {
  width: 100%;
  height: auto;
}
 `

const App = () => {
  const [moviesList, setMoviesList] = useState([])
  const [chosenMovie, setChosenMovie] = useState(null)
  const [movieGenres, setMovieGenres] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f15ba837f67c60dc9c2c9154ce892db4`)
      .then(res => res.json())
      .then(data => setMoviesList(data.results))
  }, [])

  const handleClick = movie => {
    setChosenMovie(movie)
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieGenres(data.genres))
  }

  return (
     <>  
     <Router>
     <NavBar />
     <Main>
      <MovieContainer>
        {moviesList.map(movie =>
          <Movie key={movie.id} onClick={() => handleClick(movie)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <p>{movie.title}</p>
          </Movie>
        )}
      </MovieContainer>
      {/* <Route path="/" render={() => <h1></h1>}></Route> */}
      </Main>
      </Router>
    </>

  );
}

export default App;