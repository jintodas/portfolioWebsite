import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import photoMobile from "../LandingPage/profileMobile.png"
import photoTablet from "../LandingPage/profileTablet.png"
import photoIpadpro from "../LandingPage/photoIpadpro.png"
import photoLaptop from "../LandingPage/photoLaptop.png"
import photoDesktop from "../LandingPage/desktop.png"
import Nav from "../ui/Nav";



const Container = styled.div`
display:flex;
height:80vh;
max-width:100%;;
flex-wrap: wrap;
overflow: hidden;
background-image:url(${photoDesktop});
// background-color:#131417;

@media only screen and (max-width:1600px) { 
    display: flex;
    flex-wrap: wrap; 
    font-size:10px;
    padding:1rem;
    opacity: 1;
    // background-color:#131417;
background-image:url(${photoLaptop});
 };

@media only screen and (max-width:1024px) { 
    display: flex;
    flex-wrap: wrap; 
    font-size:10px;
    padding:1rem;
    opacity: 1;
    // background-color:#131417;
    background-image:url(${photoIpadpro});
 };

@media only screen and (max-width:768px) { 
    display: flex;
    flex-wrap: wrap; 
    font-size:10px;
    padding:1rem;
    opacity: 1;
    background-color:#131417;
background-image:url(${photoTablet});
 };


@media only screen and (max-width:481px) { 
    display: flex;
    height:90vh;
    flex-wrap: wrap;
    max-width:100%;; 
    font-size:1rem;
    padding:1rem;
    opacity: 1;
    //background-color:#131417;
    background-image:url(${photoMobile});
 };
`



const Left = styled.div`
display:flex;
width: 60%;
margin-left:50px;
height:100vh;
color: white;
align-items: center;
font-size:2rem;
justify-content: center;
`

const Title = styled.h1`
display:flex;
width: 60%;
font-size: 2rem;
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
    <h3>Portfolio - Jinto Lal Das</h3>

    </Title>
    <Title> <h2>Frontend Developer</h2></Title>
    </Left>

     </Container>

     
    )
}