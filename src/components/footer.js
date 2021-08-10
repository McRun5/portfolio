import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import {Container, FootTitle, FootSocials, FootLink} from '../styled/foot'

const footer = () => {
    return (
        <Container>
            <FootTitle>McRun ©2021</FootTitle>
            <FootSocials>
                <FootLink href="https://github.com/McRun5"   target="_blank" rel="noopener">
                    <FaGithub />
                </FootLink>
                <FootLink href="https://www.linkedin.com/in/abdelilah-makrane/" target="_blank" rel="noopener">
                    <FaLinkedin/>
                </FootLink>
                <FootLink href="https://www.facebook.com/abdelilah.makrane/" target="_blank" rel="noopener">
                    <FaFacebook />
                </FootLink>
            </FootSocials>
        </Container>
    )
}

export default footer
