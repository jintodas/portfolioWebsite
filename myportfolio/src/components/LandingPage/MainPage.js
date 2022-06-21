import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from "../ui/Nav";
import photo from "../LandingPage/photo.jpg"
import ProfilePhoto from "../LandingPage/profilephoto.jpg"


const Container = styled.div`
height: calc( 100vh - 50px);
background-color:  #dab3ff;

display: flex;
padding: 20px;
background-image:url(${photo});`

const Left = styled.div`
width: 60%;
background-color: none;
color: white;
display: flex;
flex-direction: column;
align-items: center;
font-size:4rem;
justify-content: center;
`

const Title = styled.h1`
font-size: 70px;
width: 60%;
margin-bottom: 80px;
z-index: 10;

`
const Right = styled.div`
width: 40%;
background-color: none;
color: black;
font-size:6rem;
`

const coverPhoto = styled.div`
width : 300px;
height:200px;
background-image:url(${ProfilePhoto});
color: white;
display: flex;
flex-direction: column;
align-items: center;
`


export const MainPage =() =>{
    return(
    <Container>
   
<Left><Title>
    <h3>Hey! Wellcome.</h3>
    <h1>I am J. Das
       </h1>
    </Title></Left>

    <Right>

        <coverPhoto>
           <h3>An aspiring </h3>
           <h2>Frontend Developer</h2>
        </coverPhoto>
    </Right>
        </Container>
    )
}