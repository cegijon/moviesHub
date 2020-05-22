import React from 'react';
import UseFetchFromAPI from '../hooks/UseFetchFromAPI';
import TrendSection from './TrendSection';

const Movies = () => {

  const popularMovies = UseFetchFromAPI(`https://api.themoviedb.org/3/movie/popular?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`);
  const topRatedMovies = UseFetchFromAPI(`https://api.themoviedb.org/3/movie/top_rated?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`);
  const upcomingMovies = UseFetchFromAPI(`https://api.themoviedb.org/3/movie/upcoming?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`)
  const nowPlayingMovies = UseFetchFromAPI(`https://api.themoviedb.org/3/movie/now_playing?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`)

  return (
    <>
      {popularMovies &&
        <TrendSection link={"movie/category/popular"} title={"Popular Movies"} info={popularMovies.results} media={"movie"} />
      }
      {topRatedMovies &&
        <TrendSection link={"movie/category/top_rated"} title={"Top Rated Movies"} info={topRatedMovies.results} media={"movie"} />
      }
      {upcomingMovies &&
        <TrendSection link={"movie/category/upcoming"} title={"Upcoming Movies"} info={upcomingMovies.results} media={"movie"} />
      }
      {nowPlayingMovies &&
        <TrendSection link={"movie/category/now_playing"} title={"Now Playing Movies"} info={nowPlayingMovies.results} media={"movie"} />
      }
    </>
  )
}

export default Movies;