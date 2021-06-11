import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import Navbar from './navBar';

function Menu (){
    const [isOpen, setOpen] = useState(false)
    return(
    <>
        <Hamburger toggled={isOpen} toggle={setOpen} />
            {( isOpen && <Navbar />)}
    </>
    )
}
export default Menu;