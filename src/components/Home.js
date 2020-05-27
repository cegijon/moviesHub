import React from 'react';
import useFetchFromAPI from '../hooks/UseFetchFromAPI';
import TrendSection from './TrendSection';

const Home = () => {
  const moviesOnTrend = useFetchFromAPI(`https://api.themoviedb.org/3/trending/movie/week?api_key=f15ba837f67c60dc9c2c9154ce892db4`);
  const seriesOnTrend = useFetchFromAPI(`https://api.themoviedb.org/3/trending/tv/week?api_key=f15ba837f67c60dc9c2c9154ce892db4`);

  return (
    <>
      {moviesOnTrend &&
        <TrendSection link={"movie/trending/page/1"} title={"Movies on Trend"} info={moviesOnTrend.results} media={"movie"} />
      }
      {seriesOnTrend &&
        <TrendSection link={"tv/trending/page/1"} title={"Tv Shows on Trend"} info={seriesOnTrend.results} media={"tv"} />
      }
    </>
  )
}

export default Home;