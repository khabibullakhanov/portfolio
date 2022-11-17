import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/Images/My logo.jpg"
import { NavLink } from 'react-router-dom'



export function Navbar() {
    return (
        <div id='navbar-main-container'>
            <div id='navbar-main-container-left-content'>
                <figure id='navbar-main-container-left-content-figure'>
                    <img src={logo} alt="" />
                </figure>
            </div>
            <div id='navbar-main-container-right-content'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolios">Portfolios</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        </div>
    )
}
