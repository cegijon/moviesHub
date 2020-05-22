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
background-color: #23272a;
.home, .movies, .tv, .search {
     color: #dcddde;
     width: 30px;
     height: 30px;
     padding: 10px;
     cursor: pointer;
 }
 .menu-icons {
  width: 170px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.search-sector {
    width: 300px;
    margin-left: 30px;
    form {
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const SearchIcon = styled(Search)`
color: #dcddde;
width: 28px;
height: 28px;
padding: 10px;
`

const InputSearch = styled.input`
height: 28px;
width: 250px;
font-size: 28px;
padding: 10px;
background-color: transparent;
color: #dcddde;
border: none;
`;

const NavBar = () => {
  return (
    <NavBarStyled>
       <div className='menu-icons'>
      <Link className='home' to='/'><Home /></Link>
      <Link className='movies' to='/movies'><Video /></Link>
      <Link className='tv' to='/tv'><Tv /></Link>
      </div>
      <div classname='search-sector'>
        <form>
      <Link className='search' to="/"><SearchIcon /><InputSearch 
        type="text"
        placeholder="Search"></InputSearch>
      </Link>
      </form></div>
    </NavBarStyled>
  )
}

export default NavBar;