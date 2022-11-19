import React from 'react'
import './About.css'
import oybek from "../../Assets/Images/oybekA.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';



export function About() {

    const myTeam = [
        {
            name: "Oybek",
            surname: "Abduljabborov",
            img: oybek,
            work: "Full Stack"
        },
        {
            name: "Muhammadxon",
            surname: "Habibullaxonov",
            img: oybek,
            work: "Front-End"
        },
        {
            name: "Muslimbek",
            surname: "Najmiddinov",
            img: oybek,
            work: "Front-End"
        },
        {
            name: "Hojiakbar",
            surname: "Nasriddinov",
            img: oybek,
            work: "Front-End"
        },
        {
            name: "Behruz",
            surname: "Abduljabborov",
            img: oybek,
            work: "Front-End"
        },
        {
            name: "Omadbek",
            surname: "Umarboyev",
            img: oybek,
            work: "Front-End"
        },
        {
            name: "Nozimjon",
            surname: "Olimjonov",
            img: oybek,
            work: "Front-End"
        },
        {
            name: "G'oyibberdi",
            surname: "G'oyipov",
            img: oybek,
            work: "Front-End"
        },
    ]

    return (
        <div id='about-main-container'>
            <h1>Out Team</h1>
            <div id='about-main-container-inside'>
                {myTeam.map((item, index) => {
                    return (
                        <div key={index} id='about-card-content'>
                            <figure>
                                <img src={item.img} alt="" />
                            </figure>
                            <div id='about-card-content-center'>
                                <h2>{item.name}</h2>
                                <p>{item.surname}</p>
                            </div>
                            <div id='about-card-content-footer'>
                                <p>{item.work} Developer</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fuga aliquam tempore soluta voluptatibus deserunt.</p>
                            </div>
                            <div id='about-card-content-footer-social'>
                                <a href="https://github.com/khabibullakhanov">
                                    <IconButton>
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                                <a href="https://t.me/khabibullakhanov">
                                    <IconButton>
                                        <TelegramIcon />
                                    </IconButton>
                                </a>
                                <a href="https://www.instagram.com/khabibullakhanov/">
                                    <IconButton>
                                        <InstagramIcon />
                                    </IconButton>
                                </a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
