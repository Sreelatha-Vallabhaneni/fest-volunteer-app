import React from 'react';
import Logo from '../assets/logo.png';
import NavBar from './navBar';
import Menu from './menu';

function Header () {
    const [state, setState] = React.useState(false);


    return(
        <div className='header-container'>
            <div className="header__logo"> 
                <img src={ Logo } className="logo" alt='logo' width="80px"/>
            </div>
            <NavBar />
            <Menu  />
        </div>
    )
}

export default Header;