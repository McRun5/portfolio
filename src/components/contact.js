import React from 'react'
import { Container, Title, Paragraph, Important } from '../styled/cntct'
import { ThemeContext } from  '../ThemeContext';


const Contact = () => {

    const [ theme ] = React.useContext(ThemeContext);

    return (
        <Container>
            <Title>Get in touch</Title>
            <Paragraph>I have a master's degree ( computer science ) from Sidi Mohamed Ben Abdellah University</Paragraph>
            <Paragraph>Actually, i am ready to start the next chapter of my life. </Paragraph>
            <Paragraph>You can reach out me by email at <Important currentTheme={theme}>makrane.abdelilah@gmail.com</Important></Paragraph>
            <Paragraph>Looking for my first experience ...</Paragraph>
        </Container>
        
    )
}


export default Contact;
