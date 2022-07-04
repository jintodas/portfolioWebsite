import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import photo from "../LandingPage/photo22.png"
import ProfilePhoto from "../LandingPage/profilephoto.jpg"




const Container = styled.div`
display:flex;
height: calc(100vh-10px);
background-color:black;
display: flex;
overflow: hidden;
backgorund-color: black;
background-image:url(${photo});`



const Left = styled.div`
display:flex;
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
display:flex;
font-size: 2rem;
margin:50px 80px;
z-index: 10;
align-item:center;

`
const Right = styled.div`
display:flex;
height:100vh;
width: 50%;
background-color: none;
color: white;
font-size:6rem;
`

const CoverPhoto = styled.div`
display:flex;
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
    <h2>Hey! Welcome.</h2>

    </Title>
    <Title> <h4>   I am Jinto L. Das, a Frontend Developer. I love to write code and free time love to travel and take photos.</h4></Title>
    </Left>

    <Right>
    <CoverPhoto></CoverPhoto>
    
    </Right>

 


        </Container>

     
    )
}