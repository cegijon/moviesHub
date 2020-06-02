import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import UseFetchFromAPI from '../hooks/UseFetchFromAPI';
import InfoCard from './InfoCard';
import CastCard from './CastCard';

const CardDetails = styled.div`
display: flex;
flex-direction: column;
.background-image {
    width: 100%;
}
.card-buttons {
    justify-content: center;
    display: flex;
    width: 100%;
button {
    background-color: rgb(25, 39, 55);
    color: #414141;
    margin: 12px;
    font-size: 25px;
    border-bottom: 1px solid black;
    font-family: inherit;
    font-weight: bold;
}
}`

const IndivCard = () => {
  const params = useParams();
  const details = {
    movie: `https://api.themoviedb.org/3/movie/${[params.id]}?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US`,
    tv: `https://api.themoviedb.org/3/tv/${[params.id]}?api_key=f15ba837f67c60dc9c2c9154ce892db4&language=en-US`
  }
  const credits = UseFetchFromAPI(`https://api.themoviedb.org/3/${[params.media]}/${[params.id]}/credits?api_key=f15ba837f67c60dc9c2c9154ce892db4`)
  const media = [params.media]
  const mediaInformation = UseFetchFromAPI(details[media])
  const [page, setPage] = useState("overview")
  const handleClick = e => {
    setPage(e.target.id)
  }
  const informationCard = {
    overview: <InfoCard
      img={mediaInformation && mediaInformation.poster_path}
      released={mediaInformation && mediaInformation.release_date}
      name={mediaInformation && mediaInformation.original_name ? mediaInformation.original_name : mediaInformation && mediaInformation.title}
      overview={mediaInformation && mediaInformation.overview}
      seasons={mediaInformation && mediaInformation.number_of_seasons}
      episodes={mediaInformation && mediaInformation.number_of_episodes}
      runtime={mediaInformation && mediaInformation.episode_run_time && mediaInformation.episode_run_time[0]}
      runtimemovies={mediaInformation && mediaInformation.runtime}
      genres={mediaInformation && mediaInformation.genres}
      production={mediaInformation && mediaInformation.production_companies}
      media={media}
      revenue={mediaInformation && mediaInformation.revenue}
      budget={mediaInformation && mediaInformation.budget}
    />,
    cast: <CastCard credits={credits}/>
  }

  return (
    <>
      <CardDetails>
        <img src={`https://image.tmdb.org/t/p/w500${mediaInformation && mediaInformation.backdrop_path}`}
          className="background-image"></img>
        {media == "tv" ?
          <>
            <div className="card-buttons">
              <Link to={`/${params.media}/${params.id}/overview`} ><button id="overview" onClick={handleClick}>OVERVIEW</button></Link>
              <Link to={`/${params.media}/${params.id}/episodes`}><button id="episodes" onClick={handleClick}>EPISODES</button></Link>
              <Link to={`/${params.media}/${params.id}/cast`}><button id="cast" onClick={handleClick}>CAST</button></Link>
              <Link to={`/${params.media}/${params.id}/similars`}><button id="similars" onClick={handleClick}>SIMILARS</button></Link>
            </div>
          </>
          :
          <>
            <div className="card-buttons">
              <Link to={`/${params.media}/${params.id}/overview`}><button id="overview" onClick={handleClick}>OVERVIEW</button></Link>
              <Link to={`/${params.media}/${params.id}/cast`}><button id="cast" onClick={handleClick}>CAST</button></Link>
              <Link to={`/${params.media}/${params.id}/videos`}><button id="videos" onClick={handleClick}>VIDEOS</button></Link>
              <Link to={`/${params.media}/${params.id}/similars`}><button id="similars" onClick={handleClick}>SIMILARS</button></Link>
            </div>
          </>}
      </CardDetails>
      {informationCard[page]}
    </>
  )
}

export default IndivCard;