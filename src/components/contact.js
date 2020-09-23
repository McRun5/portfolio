import React from 'react'
import { Container, Title, Paragraph, Important } from '../styled/cntct'
import { ThemeContext } from  '../ThemeContext';


const Contact = () => {

    const [ theme ] = React.useContext(ThemeContext);

    return (
        <Container>
            <Title>Get in touch</Title>
            <Paragraph>I'm a computer science student at Sidi Mohamed Ben Abdellah University, its my last year.</Paragraph>
            <Paragraph>Actually, i'm looking for an internship to complete my studies. </Paragraph>
            <Paragraph>You can reach out me by email at <Important currentTheme={theme}>makrane.abdelilah@gmail.com</Important></Paragraph>
            <Paragraph>Looking for my first experience ...</Paragraph>
        </Container>
        
    )
}


export default Contact;