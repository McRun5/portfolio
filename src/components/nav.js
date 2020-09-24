import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from  '../ThemeContext';
import { Link } from 'react-router-dom'

const Nav = () => {

    const [ theme, setTheme ] = useContext(ThemeContext);

    const GlobalStyle = createGlobalStyle`
        body {
            background-color: ${props => {
                switch (theme) {
                    case "colored" : return props.theme.colored.backgroundColor;
                    case "dark" : return props.theme.dark.backgroundColor;
                    case "light" : return props.theme.light.backgroundColor;
                    default : return props.theme.colored.backgroundColor
                }
            }};
            color: ${props => {
                switch(theme){
                    case "colored" : return props.theme.colored.textColor;
                    case "dark" : return props.theme.dark.textColor;
                    case "light" : return props.theme.light.textColor;
                    default : return props.theme.colored.textColor
                }
            }};
        }
        a ,a:visited{
            cursor:pointer;
            color: ${props => {
                switch(theme){
                    case "colored" : return props.theme.colored.textColor;
                    case "dark" : return props.theme.dark.textColor;
                    case "light" : return props.theme.light.textColor;
                    default : return props.theme.colored.textColor
                }
            }};
        }

    `;


    return (
        <div className="navigationBar">
            <GlobalStyle />
            {/*<img src={logo} className="logo" alt="Logo"/>*/}
            <Link to="/"><h3 style={{margin:0}}>McRun</h3></Link>
            <ul>
                <li><p><Link to="/blog">BLOG</Link></p></li>
            </ul> 
            <div className="themeContainer">
                <button id="colored" onClick={() => setTheme("colored")}></button>
                <button id="dark" onClick={() => setTheme("dark")}></button>
                <button id="light" onClick={() => setTheme("light")}></button>
            </div>
        </div>
    )
}


export default Nav;