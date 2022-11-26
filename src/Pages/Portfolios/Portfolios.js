import React, { useState } from 'react'
import "./Portfolios.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { toast } from "react-toastify";
import alto from "../../Assets/Portfolio Images/alto-portfolio.JPG"
import office from "../../Assets/Portfolio Images/khabibullakhanov-office.JPG"
import honeyStore from "../../Assets/Portfolio Images/honey-shop.JPG"
import xpressAdmin from "../../Assets/Portfolio Images/xpress-admin.JPG"
import honeyAdmin from "../../Assets/Portfolio Images/honey-admin.JPG"
import pagination from "../../Assets/Portfolio Images/pagination.JPG"
import moxoPr from "../../Assets/Portfolio Images/moxa-portfolio.JPG"
import passwordGenerator from "../../Assets/Portfolio Images/password-generator.JPG"
import quizApp from "../../Assets/Portfolio Images/quiz-app-react.JPG"
import coffeePortfolio from "../../Assets/Portfolio Images/coffee-portfolio.JPG"
import portfolio3 from "../../Assets/Portfolio Images/portfolio-3.JPG"
import calculator from "../../Assets/Portfolio Images/calculator.JPG"
import crudRedux from "../../Assets/Portfolio Images/redux-crud.JPG"
import blackPortfolio from "../../Assets/Portfolio Images/balck-portfolio.JPG"


export function Portfolios() {

    const [like, setLike] = useState(387)
    const [dislike, setDisLike] = useState(3)

    const portfolios = [
        {
            name: "Alto",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://alto-portfolio.netlify.app/",
            img: alto,
        },
        {
            name: "My Office",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://khabibullakhanov-office.netlify.app/",
            img: office,
        },
        {
            name: "Honey Shop",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://honey-store.netlify.app/",
            img: honeyStore,
        },
        {
            name: "Xpress Admin",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://xpress-admin-panel.netlify.app/",
            img: xpressAdmin,
        },
        {
            name: "Honey Admin",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://honey-admin-panel.netlify.app/",
            img: honeyAdmin,
        },
        {
            name: "Pagination",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://khabibullakhanov-pagination.netlify.app/",
            img: pagination,
        },
        {
            name: "Moxo",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://moxo-portfolio.netlify.app/",
            img: moxoPr,
        },
        {
            name: "Generator",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://password-generator-in-react.netlify.app/",
            img: passwordGenerator,
        },
        {
            name: "Quiz App",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://quiz-app-in-react.netlify.app/",
            img: quizApp,
        },
        {
            name: "Coffee",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://coffe-portfolio-khabibullakhanov.netlify.app/",
            img: coffeePortfolio,
        },
        {
            name: "Portfolio",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://portfolio03-khabibullakhanov.netlify.app/",
            img: portfolio3,
        },
        {
            name: "Black Portfolio",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://portfolio-khabibullakhanov.netlify.app/",
            img: blackPortfolio,
        },
        {
            name: "calculator",
            gitHb: "https://github.com/khabibullakhanov",
            netlify: "https://calculator-khabibullakhanov.netlify.app/",
            img: calculator,
        },
        {
            name: "CRUD in Redux",
            gitHb: "https://github.com/khabibullakhanov/redux-crud",
            netlify: "https://crud-in-redux.netlify.app/",
            img: crudRedux,
        },
    ]

    return (
        <>
            <h1 id='portfolios-length'>There are {portfolios.length} portfolios </h1>
            <div id='portfolios-inside-container'>
                {portfolios.map((item, index) => {
                    return (
                        <div key={index} id='portfolio-card'>
                            <figure id='portfolio-card-figure'>
                                <img src={item.img} alt="" />
                            </figure>
                            <div id='portfolio-card-hover'>
                                <h3 style={{ color: "white" }}>{item.name}</h3>
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
                                    <a href={item.netlify} target="_blank" rel="noopener noreferrer">
                                        <IconButton>
                                            <DashboardIcon id="portfolio-hover-icon" style={{ fontSize: "40px" }} />
                                        </IconButton>
                                    </a>
                                </div>
                                <div id='portfolio-card-like-content'>
                                    <div id='portfolio-card-like-content-left'>
                                        <IconButton
                                            onClick={() => {
                                                toast.success("Thanks for your answer !")
                                                setLike(like => like + 1)
                                            }}
                                        >
                                            <ThumbUpIcon />
                                        </IconButton>
                                        <h4>{like}</h4>
                                    </div>
                                    <div id='portfolio-card-like-content-right'>
                                        <IconButton
                                            onClick={() => {
                                                toast.error("Thanks for your answer !")
                                                setDisLike(didislike => dislike - 1)
                                            }}
                                        >
                                            <ThumbDownIcon />
                                        </IconButton>
                                        <h4>{dislike}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
