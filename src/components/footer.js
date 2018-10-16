import React from 'react'
// import { Link } from 'react-router-dom'
import Pic1 from './logo/facebook.png'
import Pic2 from './logo/steam.png'
import Pic3 from './logo/github.png'

import './App.css'

const Footer = () => (
    <footer className="footer">
        <div class="footer-text">
            <p>© 2018 - PALLOP BUNNAK</p>
        </div>
        <div class="footer-steam">
            <a href="https://steamcommunity.com/profiles/76561198137573673/"><img src={Pic2} alt={"steam"} /></a>
        </div>
        <div class="footer-github">
            <a href="https://github.com/pikkoro123"><img src={Pic3} alt={"github"} /></a>
        </div>
        <div class="footer-facebook">
            <a href="https://www.facebook.com/kotaro.katsura.98"><img src={Pic1} alt={"facebook"} /></a>
        </div>
    </footer>
)
export default Footer