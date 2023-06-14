import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from 'react-scroll';

const Nav = () => {
    return (
        <nav className='header__nav'>
            <div className='nav_menu'>
                <Link to='/'>
                    <button className='nav_btn'>Home</button>
                </Link>
                <Link to='/services'>
                    <button className='nav_btn'>Services</button>
                </Link>
                <Scroll to={"footer"} smooth duration={500}>
                    <button className='nav_btn'>Contact</button>
                </Scroll>
            </div>
        </nav>
    )
}

export default Nav;