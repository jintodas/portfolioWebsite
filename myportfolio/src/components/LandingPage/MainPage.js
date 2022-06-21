import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from "../ui/Nav";

const Container = styled.div`
height: calc( 100vh - 50px);
background-color: white;
display: flex;
padding: 20px;`

const Left = styled.div`
width: 60%;
background-color: white;
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
font-size: 40px;
width: 60%;
margin-bottom: 80px;
z-index: 10;
`
const Right = styled.div`
width: 40%;
background-color: white;
color: black;`


export const MainPage =() =>{
    return(
    <Container>
   
<Left><Title>Hey! Wellcome to my page.
    I am J. Das enthusiastic Frontend Developer.
    </Title></Left>
        </Container>
    )
}