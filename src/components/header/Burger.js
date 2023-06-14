import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Link as Scroll} from 'react-scroll';

const StyledMenu = styled.nav`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    nav {
      display: flex;
      position: absolute;
      right: 0;
      top: 83px;
      flex-direction: column;
      box-shadow: 0 3px 6px -2px #A5A5A5;
      width: 55%;
      z-index: 3;
      background: #00263d;

      a {
        display: ${({open}) => (open ? "flex" : "none")};
        font-family: "Open Sans", sans-serif;
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.1875rem;
        color: silver;
        text-decoration: none;
        text-transform: uppercase;
        padding: 25px;
        justify-content: center;

        &:active {
          color: blue;
        }
      }
    }
  }
`

const StyledBurger = styled.button`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    border: none;
    background: #00263d;

    span {
      display: block;
      width: 25px;
      height: 2.5px;
      background: white;
      margin-bottom: 4px;

      &:first-child {
        transform: ${({open}) => (open ? "rotate(45deg) translate(4px, 7px)" : "rotate(0) translate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({open}) => (open ? "0" : "1")};
      }

      &:last-child {
        transform: ${({open}) => (open ? "rotate(-45deg) translate(2px, -5px)" : "rotate(0) translate(0)")};
      }
    }

    margin: 20px 0;
  }
`

const Burger = ({open, setOpen}) => {
    const handleIsOpen = () => {
        setOpen(!open)
    }
    const closeSideBar = () => {
        setOpen(false)
    }
  
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </StyledBurger>
            <StyledMenu open={open} onClose={handleIsOpen}>
                <nav onClick={closeSideBar}>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Scroll to={"footer"} onClick={closeSideBar} smooth duration={500}>Contact</Scroll>
                </nav>
            </StyledMenu>
        </>
    )
}

export default Burger;