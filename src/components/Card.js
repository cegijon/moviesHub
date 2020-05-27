import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardStyled = styled.div`
width: 18%;
background-color: #141414;
display: flex;
flex-direction: column;
color: #fff;
margin: 5px 0;
.link {
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin:0;
    .img-div {
        flex: 6;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title-div {
        flex: 1;
        h4 {
          margin: 2px;
        }
      }  
}
`

const Card = ({ img, titlemedia, id, media, info }) => {
  return (
    <>
    <CardStyled>
        <Link className="link" to ={`/${media}/${id}/info`}>
        <div className="img-div">
            <img src={img} />
        </div>
        <div className="title-div">
            <h4>{titlemedia}</h4>
        </div>
        </Link>
    </CardStyled>
</>
  )
}

export default Card;