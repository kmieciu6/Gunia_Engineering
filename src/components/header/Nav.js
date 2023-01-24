import React, {useState} from "react";
import Burger from "./Burger";
import {Link} from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='header__nav'>
            <Burger open={open} setOpen={setOpen}/>
            <div className='nav_menu'>
                <Link to='/'>
                    <button className='nav_btn'>Home</button>
                </Link>
                <Link to='/services'>
                    <button className='nav_btn'>Services</button>
                </Link>
                <Link to='/portfolio'>
                    <button className='nav_btn'>Portfolio</button>
                </Link>
                <Link to='/about'>
                    <button className='nav_btn'>About</button>
                </Link>
                <Link to='/contact'>
                    <button className='nav_btn'>Contact</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;