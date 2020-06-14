import React from 'react';
import styled from 'styled-components';

import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Github } from "@styled-icons/fa-brands/Github";
import { Mail } from "@styled-icons/feather/Mail";

// atencion al tabulado, todo el estilo tiene que estar dos espacios despues de la declaracion de la const 
// No es necesario el export ya que estos estilos no se importan en ningun componente. 

export const FacebookIcon = styled(FacebookSquare)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`
export const TwitterIcon = styled(Twitter)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const InstagramIcon = styled(Instagram)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const LinkedinIcon = styled(Linkedin)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const GithubIcon = styled(Github)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const MailIcon = styled(Mail)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

const FooterInfo = styled.footer`
  padding: 18px;
  align-items: center;
  .footer-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4, p {
      color: #A9A9A9;
      margin: 2px;
    }
  }
  .social-media-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterInfo>
      <div className='footer-info'>
        <h4>All rights reserved</h4>
        <p>Designed by Celina Gijon - Information fetched from: https://api.themoviedb.org</p>
      </div>
      <div className='social-media-icons'>
      {/* Agreguemos aca un <a></a> que rodee a los iconos para que estas redes sean accesibles para los que visitan tu pagina */}
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedinIcon />
        <GithubIcon />
        <MailIcon />
      </div>
    </FooterInfo>
  );
}

export default Footer;
