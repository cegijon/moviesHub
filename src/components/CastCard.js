import React from 'react';
import styled from 'styled-components';
import Card from './Card'
import { useParams } from 'react-router-dom';

const CastCardStyled = styled.article`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`

const CastCard = (credits) => {
  const params = useParams()
  console.log(params)
  return (
    <CastCardStyled>
      {credits && credits.credits && credits.credits.cast.map((credit) => {
        return (
          <Card
            img={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
            name={credit.name}
            character={credit.character}
            media={"person"}
            id={credit.id}
          />
        )
      })}
    </CastCardStyled>
  )
}

export default CastCard;