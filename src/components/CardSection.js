import React from 'react';
import styled from 'styled-components';
import Card from './Card'

const CardSectionStyled = styled.section`
justify-content: space-around;
display: flex;
flex-wrap: wrap;
width: 100%;
background-color: #141414;
h2 {
  display: block;
}
`

const CardSection = ({ info, cardnumber, titleall, media }) => {
  return (
    <>
      <h2>{titleall}</h2>
      <CardSectionStyled>
        {info &&
          info.map((element, i) => {
            if (i < cardnumber) {
              return (
                <>
                  <Card
                    media={media}
                    id={element.id}
                    img={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                    titlemedia={element.original_name ? element.original_name : element.title}
                  />
                </>
              )
            }
          })
        }
      </CardSectionStyled>
    </>
  )
}

export default CardSection;