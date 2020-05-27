import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardSection from './CardSection';

const TrendSectionStyled = styled.section`
background-color: #141414;
color: #fff;
.title {
    display:flex;
    .link {
        margin: 20px;
        text-decoration: none;
        color: #2196f3;
    }
}
`

const TrendSection = ({ info, title, link, media }) => {
  return (
    <>
      <TrendSectionStyled>
        <div className="title">
          <h2>{title}</h2>
          <Link
            className="link"
            to={link}>→
          </Link>
        </div>
        <CardSection
          info={info}
          link={link}
          cardnumber={5}
          media={media}>
        </CardSection>
      </TrendSectionStyled>
    </>
  )
}

export default TrendSection;