import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


const Screen = () => {

    return (
        <div className="screenContainer">
            <div className="main">
                <h1>Hello 👋</h1>
                <p className="description">I am <span className="fullname">Abdelilah Makrane</span>, Front-end developer</p>
                <div className="socials">
                    <a href="https://github.com/McRun5"   target="_blank" rel="noopener" className="socialButton"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/abdelilah-makrane/" target="_blank" rel="noopener" className="socialButton"><FaLinkedin/></a>
                    <a href="https://www.facebook.com/abdelilah.makrane/" target="_blank" rel="noopener" className="socialButton"><FaFacebook /></a>
                </div>
            </div>
        </div>
    )
}

export default Screen
