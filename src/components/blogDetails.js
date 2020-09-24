import React from 'react';
import Nav from './nav';
import Footer from './footer';
import { Container, Body, Image, Title, Date, Content, Description } from '../styled/blogD'
import { Posts } from './blog';

const BlogDetails = ({match}) => {

    let id  = match.params.id;
    let post = Posts.find((p)=> p.id == id); 

    return (
        <Container>
            <Nav />
            <Body>
                <Title>{post.title}</Title>
                <Description>{post.description}</Description>
                <Date>{post.date}</Date>
                <Image src={post.img}></Image>
                <Content>{post.content}</Content>
            </Body>
            <Footer />
        </Container>
    )
}

export default BlogDetails;