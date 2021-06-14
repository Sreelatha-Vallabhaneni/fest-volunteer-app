import React from 'react';
import Logo from '../assets/logo.png';
import NavBar from './navBar';

function Header () {
    const [state, setState] = React.useState(false);


    return(
        <div className='header-container'>
            <div className="header__logo"> 
                <a href="#home"> <img src={ Logo } className="logo" alt='logo' width="80px"/> </a>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;