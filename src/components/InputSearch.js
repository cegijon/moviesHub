import React from 'react';
import { SearchInput } from './NavBarStyled';
import FeatherIcon from 'feather-icons-react';

const InputSearch = () => {
    return (
        <label>
            <FeatherIcon icon="search" size="30px" color= "#dcddde" />
            <SearchInput
                type="text"
                placeholder="Search"
            >
            </SearchInput>
        </label>
    );
}

export default InputSearch;