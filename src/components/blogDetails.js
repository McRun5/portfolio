import React from 'react';
import Nav from './nav';
import Footer from './footer';
import { Container, Body, Image, Title, Date, ContentParagraph, Description } from '../styled/blogD'
import { Posts } from './blog';

const BlogDetails = ({match}) => {

    let slug  = match.params.slug.replace('-',' ');
    let post = Posts.find((p) =>
        p.title === slug
    ); 

    return (
        <Container>
            <Nav />
            <Body>
                <Title>{post.title}</Title>
                <Description>{post.description}</Description>
                <Date>{post.date}</Date>
                <Image src={post.img}></Image>
                {
                    post.content.map(e => {
                        if(e.type === 'paragraph') return <ContentParagraph>{e.data}</ContentParagraph> 
                        else return <img src={e.data} />
                    })
                }
                
            </Body>
            <Footer />
        </Container>
    )
}

export default BlogDetails;