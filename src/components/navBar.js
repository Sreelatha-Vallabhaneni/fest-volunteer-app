import React from 'react';

function NavBar () {
    return(
        <div className="nav">
            <ul className="nav__list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#volunteer-form">Volunteers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;