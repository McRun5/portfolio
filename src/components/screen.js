import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


const Screen = () => {

    return (
        <div className="screenContainer">
            <div className="main">
                <h1>Hello <span  role="img" aria-label="hand">👋</span></h1>
                <p className="description">I am <span className="fullname">Abdelilah Makrane</span>, Junior Data Scientist and BI Developer 🚀</p>
                <div className="socials">
                    <a href="https://github.com/McRun5" target="_blank" rel="noopener noreferrer" className="socialButton"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/abdelilah-makrane/" target="_blank" rel="noopener noreferrer" className="socialButton"><FaLinkedin/></a>
                    <a href="https://www.facebook.com/abdelilah.makrane/" target="_blank" rel="noopener noreferrer" className="socialButton"><FaFacebook /></a>
                </div>
            </div>
        </div>
    )
}

export default Screen
