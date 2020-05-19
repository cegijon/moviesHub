import React from 'react';
import { Nav } from './NavBarStyled';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import InputSearch from './InputSearch';

const NavBar = () => {
    return (
        <Nav>
            <div classname="menu-icons">
                    <Link to="/"> <FeatherIcon icon="home" size="30px" color= "#dcddde" />
                    </Link>
                <Link to="/movies">
                    <FeatherIcon icon="video" size="30px" color= "#dcddde" />
                </Link>
                <Link to="/tv">
                    <FeatherIcon icon="tv" size="30px" color= "#dcddde" />
                </Link>
            </div>
            <InputSearch />
        </Nav >
    );
}


export default NavBar;