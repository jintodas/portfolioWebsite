import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import photo from "../LandingPage/photo4.jpg"
import ProfilePhoto from "../LandingPage/profilephoto.jpg"

const Container = styled.div`
height:800px;
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
const DivLeftP= styled.div`
align-item:center;
display:flex;
text-color:#ffff;
font-size:2rem;
margin-left:100px;
`

const MyPhoto = styled.div`
height:350px;
width:280px;
margin :10px;
padding:20px;
background-image:url(${ProfilePhoto});
align-item:right;
margin-top:100px;
margin-left:300px;

`

export const About =() =>{
    return(
       
    <Container>
 <Left>

     <DivLeftP>
     I am Jinto Das, an aspiring Frontend Developer, passionate about coding and designing
     </DivLeftP>
  
    </Left>

    <Right>
    <MyPhoto></MyPhoto>
    </Right>
        </Container>

     
    )
}