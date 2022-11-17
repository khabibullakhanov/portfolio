import React from 'react'
import "./Home.css"
import MyImage from "../../Assets/Images/My Image.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Home() {
    return (
        <div id='home-main-container'>
            <div id='home-main-container-header'>
                <figure>
                    <img src={MyImage} alt="" />
                </figure>
                <div id='home-main-container-right-content'>
                    <h3>HI There ! I'M</h3>
                    <h1>Khabibullakhanov Mukhammadkhan.</h1>
                    <p>I'm middle junior Front-End Developer located in Uzbekistan. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. I am an extremely curious and self-motivated individual with a huge passion for design in general. As an autodidact, I take a very positive and ego-free approach to all aspects of my life, and I carry a strong work ethic with me wherever I go. Well-organised person, problem solver, independent employee with high attention to detail. Fan of Football, outdoor activities, TV series and English language. Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                    <div id='home-main-container-right-content-resume'>
                        <button>Resume</button>
                        <div id='home-main-container-right-content-resume-social'>
                            <div>
                                <a href="https://github.com/khabibullakhanov" target="_blank">
                                    <IconButton>
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </div>
                            <div>
                                <a href="https://t.me/khabibullakhanov" target="_blank">
                                    <IconButton>
                                        <TelegramIcon />
                                    </IconButton>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/khabibullakhanov/" target="_blank">
                                    <IconButton>
                                        <InstagramIcon />
                                    </IconButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
