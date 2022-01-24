import React from 'react';
import {LocInput, StyledHeader} from './StyledHeader'

const Header = () => {
    return (
        <StyledHeader>
            <LocInput placeholder={"Enter city name..."}>

            </LocInput>
        </StyledHeader>
    );
};

export default Header;