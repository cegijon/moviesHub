import React from 'react';
import UseFetchFromAPI from '../hooks/UseFetchFromAPI';
import TrendSection from './TrendSection';

const Series = () => {

  const popularSeries = UseFetchFromAPI(`https://api.themoviedb.org/3/tv/popular?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`);
  const topRatedSeries = UseFetchFromAPI(`https://api.themoviedb.org/3/tv/top_rated?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`);
  const currentlyAiringSeries = UseFetchFromAPI(`https://api.themoviedb.org/3/tv/on_the_air?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`)
  const seriesAiringToday = UseFetchFromAPI(`https://api.themoviedb.org/3/tv/airing_today?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US&page=1`)
  
  return (
    <>
      {popularSeries &&
        <TrendSection link={"Series/category/popular"} title={"Popular Tv Shows"} info={popularSeries.results} media={"Series"} />
      }

      {topRatedSeries &&
        <TrendSection link={"Series/category/top_rated"} title={"Top Rated Tv Shows"} info={topRatedSeries.results} media={"Series"} />
      }

      {currentlyAiringSeries &&
        <TrendSection link={"Series/category/on_the_air"} title={"Currently Airing Tv Shows"} info={currentlyAiringSeries.results} media={"Series"} />
      }

      {seriesAiringToday &&
        <TrendSection link={"Series/category/airing_today"} title={"Airing Today Tv Shows"} info={seriesAiringToday.results} media={"Series"} />
      }
    </>
  )
}

export default Series;