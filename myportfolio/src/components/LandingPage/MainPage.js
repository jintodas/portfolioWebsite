import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import photo from "../LandingPage/photo4.png"
import ProfilePhoto from "../LandingPage/profilephoto.jpg"
import { PortfolioPage  } from '../PortfolioPage/PortfolioPage';



const Container = styled.div`
height: calc(100vh-10px);
background-color:black;
display: flex;
overflow: hidden;
backgorund-color: black;
background-image:url(${photo});`



const Left = styled.div`
width: 50%;
height:100vh;
background-color: none;
color: white;
display: flex;
flex-direction: column;
align-items: center;
font-size:4rem;
justify-content: center;
`

const Title = styled.h1`
font-size: 50px;
margin-bottom: 80px;
z-index: 10;

`
const Right = styled.div`
height:100vh;
width: 50%;
background-color: none;
color: white;
font-size:6rem;
`

const CoverPhoto = styled.div`
margin-top:100px;
width : 320px;
height:400px;
color: white;
display: flex;
flex-direction: column;
align-items: right;
`
const Portfolio = styled.div`
// height: calc(100vh-10px);
background-color:black;
display: flex;
padding:20px;
overflow: hidden;
//background-image:url(${photo});`


export const MainPage =() =>{
    return(
       
    <Container>
 <Left><Title>
    <h2>Hey! Wellcome</h2>
    </Title></Left>

    <Right>
    <CoverPhoto></CoverPhoto>
    
    </Right>

 


        </Container>

     
    )
}