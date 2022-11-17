import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import myImage from "../../Assets/Images/My_logo-removebg-preview.png"

export function Footer() {
  return (
    <div id='footer-main-container'>
      <div id='footer-header-content'>
        <p></p>
        <div id='footer-header-content-inside'>
          <a href="https://github.com/khabibullakhanov" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
          <a href="https://t.me/khabibullakhanov" target="_blank">
            <IconButton>
              <TelegramIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/khabibullakhanov/" target="_blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
        <p></p>
      </div>
      <div id='footer-bottom'>
        <figure>
          <img src={myImage} alt="" />
        </figure>
        <p>Khabibullakhanov © 2022</p>
      </div>
    </div>
  )
}
