import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../Assets/Images/My logo.jpg"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export function Navbar() {

    const [open, setOpen] = useState(false)

    const navLinks = [
        {
            name: "Home",
            icons: <HomeSharpIcon />,
            pathName: "/",
        },
        {
            name: "Our Team",
            icons: <InfoSharpIcon />,
            pathName: "/ourTeam",
        },
        {
            name: "Portfolios",
            icons: <CategorySharpIcon />,
            pathName: "/portfolios",
        },
        {
            name: "Contacts",
            icons: <BorderColorSharpIcon />,
            pathName: "/contacts",
        },
    ]

    const navigate = useNavigate()
    return (
        <div id='navbar-main-container'>
            <div id='navbar-main-container-left-content'>
                <figure
                    onClick={() => {
                        navigate('/')
                    }}
                    id='navbar-main-container-left-content-figure'>
                    <img src={logo} alt="" />
                </figure>
            </div>
            <div id='navbar-main-container-right-content'>
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/ourTeam">Our Team</NavLink>
            <NavLink to="/contacts">Contacts</NavLink> */}
                {navLinks.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.pathName}>{item.name}</NavLink>
                    )
                })}
                <IconButton id='navbar-menu-icon'
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    id="drawer"
                    open={open}
                    onClose={() => {
                        setOpen(!open);
                    }}
                >
                    <div id="close-appabr-navbar-div">
                        <CloseIcon
                            onClick={() => {
                                setOpen(false)
                            }}
                            id="close-appbar-navbar"
                        />
                    </div>
                    <figure id='drawer-figure'>
                        <img src={logo} alt="" />
                    </figure>
                    <div className="drawer">
                        {navLinks.map((link, indeks) => {
                            return (
                                <NavLink
                                    key={indeks}
                                    onClick={() => {
                                        setOpen(false)
                                    }}
                                    to={link.pathName}>{link.icons} {link.name}</NavLink>
                            )
                        })}
                    </div>
                </Drawer>
            </div>
        </div>
    )
}
