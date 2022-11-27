import React from 'react'
import "./Home.css"
import MyImage from "../../Assets/Images/My Image.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import resume from "../../Assets/Resume/Resume.pdf"




export function Home() {
    // const startYear = "2021";
    const startMonth = "5";

    const nowTime = new Date().toLocaleDateString().split("/");

    console.log(nowTime);
    // const nowYear = nowTime[2];
    const nowMonth = nowTime[0];
    const expMonth = `${nowMonth - startMonth}`;
    // const expYear = `${nowYear - startYear}`;
    const experience = `${expMonth} Oy`;

    // console.log(new Date().toLocaleDateString().split("."));
    return (
        <div id='home-main-container'>
            <div id='home-main-container-header'>
                <figure>
                    <img src={MyImage} alt="" />
                </figure>
                <div id='home-main-container-right-content'>
                    <h3>HI There ! I'M</h3>
                    <h1>Khabibullakhanov Mukhammadkhan.</h1>
                    <p>I'm middle junior Front-End Developer located in Uzbekistan. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. My phone number <a href="tel:993414718">+998993414718</a> I am an extremely curious and self-motivated individual with a huge passion for design in general. As an autodidact, I take a very positive and ego-free approach to all aspects of my life, and I carry a strong work ethic with me wherever I go. Well-organised person, problem solver, independent employee with high attention to detail. Fan of Football, outdoor activities, TV series and English language. Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                    <div id='work-experience'>
                        <h3>My Work Experience :</h3>
                        <p>{experience}</p>
                    </div>
                    <div id='home-main-container-right-content-resume'>
                        {/*  */}
                        <button><a href={resume} download={resume}>Resume</a></button>
                        {/* </a> */}
                        <div id='home-main-container-right-content-resume-social'>
                            <div>
                                <a href="https://github.com/khabibullakhanov">
                                    <IconButton>
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </div>
                            <div>
                                <a href="https://t.me/khabibullakhanov">
                                    <IconButton>
                                        <TelegramIcon />
                                    </IconButton>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/khabibullakhanov/">
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
