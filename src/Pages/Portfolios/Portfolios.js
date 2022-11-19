import React from 'react'
import "./Portfolios.css"
import backImg from "../../Assets/Images/header image home.webp"
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



export function Portfolios() {

    const portfolios = [
        {
            name: "name",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://app.netlify.com/teams/habibullaxonovmuhammadxon",
            img: backImg,
        },
        {
            name: "name",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://app.netlify.com/teams/habibullaxonovmuhammadxon",
            img: backImg,
        },
        {
            name: "name",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://app.netlify.com/teams/habibullaxonovmuhammadxon",
            img: backImg,
        },
        {
            name: "name",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://app.netlify.com/teams/habibullaxonovmuhammadxon",
            img: backImg,
        },
        {
            name: "name",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://app.netlify.com/teams/habibullaxonovmuhammadxon",
            img: backImg,
        },
        {
            name: "name",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://app.netlify.com/teams/habibullaxonovmuhammadxon",
            img: backImg,
        },
    ]

    return (
        <>
            <h1 id='portfolios-length'>There are {portfolios.length} portfolios </h1>
            <div id='portfolios-inside-container'>
                {portfolios.map((item, index) => {
                    return (
                        <>
                            <div id='portfolio-card'>
                                <figure id='portfolio-card-figure'>
                                    <img src={item.img} alt="" />
                                </figure>
                                <div id='portfolio-card-hover'>
                                    <div>
                                        <h3>See on Git Hub</h3>
                                        <a rel="noopener noreferrer" href={item.gitHb} >
                                            <IconButton>
                                                <GitHubIcon id="portfolio-hover-icon" style={{ fontSize: "40px" }} />
                                            </IconButton>
                                        </a>
                                    </div>
                                    <div>
                                        <h3>See on Netlify </h3>
                                        <a rel="noopener noreferrer" href={item.netlify} >
                                            <IconButton>
                                                <DashboardIcon id="portfolio-hover-icon" style={{ fontSize: "40px" }} />
                                            </IconButton>
                                        </a>
                                    </div>
                                    <div id='portfolio-card-like-content'>
                                        <div id='portfolio-card-like-content-left'>
                                            <IconButton>
                                                <ThumbUpIcon  />
                                            </IconButton>
                                            <h4>435</h4>
                                        </div>
                                        <div id='portfolio-card-like-content-right'>
                                            <IconButton>
                                                <ThumbDownIcon />
                                            </IconButton>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
