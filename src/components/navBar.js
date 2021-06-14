import React, {useState} from 'react';
import Hamburger from 'hamburger-react';

function NavBar () {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => setOpen(!isOpen);
    return(
        <div className="nav">
            <ul className={isOpen ? "nav__list active" : "nav__list"} >
                <li><a className="active" href="#home">Home</a></li>
                <li><a className="active" href="#about">About</a></li>
                <li><a className="active" href="#volunteer-form">Volunteers</a></li>
                <li><a className="active" href="#contact">Contact</a></li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
    )
}

export default NavBar;