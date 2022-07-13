import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import photo from "../LandingPage/photo22.png"
import photoTablet from "../LandingPage/photo222.png"
import photoMobile from "../LandingPage/photo2222.png"


const Container = styled.div`
display:flex;
height:90vh;
max-width:100%;;
background-color:black;
display: flex;
flex-wrap: wrap;
overflow: hidden;
backgorund-color: black;
background-image:url(${photoTablet});

@media only screen and (max-width:1025px) {  
    font-size:10px;
    padding:10px;
    opacity: 1;
    background-image:url(${photoTablet});
 };

@media only screen and (max-width:380px) {  
    font-size:10px;
    padding:10px;
    opacity: 1;
    background-image:url(${photoMobile});
 }

`




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
height:100%;
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
flex-wrap: wrap;
flex-direction: column;
align-items: right;
`

export const MainPage =() =>{
    return(
       
    <Container>
   <Left><Title>
    <h2>Hey! Welcome.</h2>

    </Title>
    <Title> <h4>   I am Jinto L. Das, a Frontend Developer. I love to write code and free time love to travel and take photos.</h4></Title>
    </Left>

     </Container>

     
    )
}