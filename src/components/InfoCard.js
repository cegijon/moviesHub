import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InfoCardStyled = styled.div`
h2 {
    font-weight: 400;
    font-size: 30px;
}
.container-info {
    display: flex;
    img {
        width: 20%;
        heigth: auto;
        margin: 20px;
    }
    .info {
        font-size: 14px;
        font-weight: 300;
        width: 50%;
        margin: 0;
        h2{
            font-size: 32px;
            margin:20px 0;
            font-weight: 300;
        }
    }
}
`

const InfoCard = ({ media, name, overview, seasons, episodes, runtime, genres, production, released, runtimemovies, budget, revenue, img }) => {
  return (
    <>
      <InfoCardStyled>
        <div className="container-info">
          <img src={`https://image.tmdb.org/t/p/w500${img}`} />
          <div className="info">
            {media == "tv" ?
              <>
                <h2>{name}</h2>
                <p>{overview}</p>
                <p>Seasons: {seasons}</p>
                <p>Episodes: {episodes}</p>
                <p>Runtime: {runtime} minutes</p>
                <p>Genres:
                        {genres && genres.map((genre, i) => {
                  return (
                    <span> {genre.name} </span>
                  )
                }
                )
                  }
                </p>
                <p>Production:
                        {production && production.map((production, i) => {
                  return (
                    <span> {production.name} </span>
                  )
                })}</p>
              </>
              :
              <>
                <h2>{name}</h2>
                <p>{overview}</p>
                <p>Released: {released} </p>
                <p>Runtime: {runtimemovies} minutes</p>
                <p>Genres:
                        {genres && genres.map((genre, i) => {
                  return (
                    <span> {genre.name} </span>
                  )
                }
                )
                  }
                </p>
                <p>Budget: ${budget}</p>
                <p>Revenue: ${revenue}</p>
                <p>Production:
                        {production && production.map((production, i) => {
                  return (
                    <span> {production.name} </span>
                  )
                })}</p>
              </>}
          </div>
        </div>
      </InfoCardStyled>
    </>
  )
}

export default InfoCard;