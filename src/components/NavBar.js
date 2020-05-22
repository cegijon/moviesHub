import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home } from '@styled-icons/feather/Home';
import { Video } from '@styled-icons/feather/Video';
import { Tv } from '@styled-icons/feather/Tv';
import { Search } from '@styled-icons/feather/Search';

const NavBarStyled = styled.nav`
display: flex;
width: 100%;
background-color: black;
.home, .movies, .tv, .search {
    color: #dcddde;
    width: 30px;
    height: 30px;
    padding: 10px;
    cursor: pointer;
}
`

const SearchInput = styled.input`
width: 250px;
height: 28px;
font-size: 28px;
background-color: #141414;
color: #ffff;
border: none;
`;

const NavBar = () => {
  return (
    <NavBarStyled>
      <Link className='home' to='/'><Home /></Link>
      <Link className='movies' to='/movies'><Video /></Link>
      <Link className='tv' to='/tv'><Tv /></Link>
      <Link className='search' to="/"><Search /><SearchInput
        type="text"
        placeholder="Search"
      >
      </SearchInput></Link>
    </NavBarStyled>
  )
}

export default NavBar;