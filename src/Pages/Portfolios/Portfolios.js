import React from 'react'
import "./Portfolios.css"
import backImg from "../../Assets/Images/header image home.webp"
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IconButton } from '@mui/material';



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
            <h1>There are {portfolios.length} portfolios </h1>
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
                                        <a href={item.gitHb} target="_blank">
                                            <IconButton>
                                                <GitHubIcon style={{ fontSize: "40px" }} />
                                            </IconButton>
                                        </a>
                                    </div>
                                    <div>
                                        <h3>See on Netlify </h3>
                                        <a href={item.netlify} target="_blank">
                                            <IconButton>
                                                <DashboardIcon style={{ fontSize: "40px" }} />
                                            </IconButton>
                                        </a>
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
