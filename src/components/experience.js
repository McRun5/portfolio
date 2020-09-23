import React from 'react'
import { TitleOne, ExpList, Exp, ExpTitle, ExpDescription, ExpDate } from '../styled/exp'
import styled from 'styled-components'

import { ThemeContext } from  '../ThemeContext';



 const Experience = () => {

    const [ theme ] = React.useContext(ThemeContext);




    const experiences = [
        {
            id:1,
            title:"Internship at Al Barid Bank",
            description:"Realization of a computerized management system for the IT equipment of the agencies of Al Barid Bank",
            date:"April 2019 - May 2019",
        },
        {
            id:2,
            title:"Conception and design of an e-commerce website Shopmag.ma",
            description:" A local e-commerce website using Wordpress",
            date:"march 2020 - May 2020",
        },
        {
            id:3,
            title:"Gow carpooling app development ",
            description:"Making a react native app using : react native, expo, node.js, expressJs, git, heroku.",
            date:"May 2020 - August 2020",
        },
    ]

    
    return (
        <> 
            <TitleOne>Experience <span role="img">🔨</span></TitleOne>
            <ExpList>
                {
                    experiences.map(e => (
                        <Exp currentTheme={theme}>
                            <ExpTitle>{e.title}</ExpTitle>
                            <ExpDescription>{e.description}</ExpDescription>
                            <ExpDate>{e.date}</ExpDate>
                        </Exp>
                    ))
                }
            </ExpList>
        </>
    )
}


export default Experience;