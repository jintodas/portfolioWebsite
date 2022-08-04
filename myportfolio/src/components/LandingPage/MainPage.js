import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from "../ui/Nav";
import ProfilePhoto from "../LandingPage/profilephoto.jpg"



const Container = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
height:80vh;
max-width: 100%;
background-color:#131417;
justify-content: space-around;

@media only screen and (max-width:1600px) { 
    max-width: 100%;
    display: flex;
    flex-wrap: wrap; 
    font-size:10px;
    padding:1rem;
    opacity: 1;
    background-color:#131417;
};


@media only screen and (max-width:1024px) { 
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap; 
    font-size:10px;
    padding:1rem;
    opacity: 1;
    background-color:#131417;
};


@media only screen and (max-width:768px) { 
    max-width: 100%;
    display: flex;
    flex-wrap: wrap; 
    font-size:10px;
    padding:1rem;
    opacity: 1;
    background-color:#131417;
};


@media only screen and (max-width:481px) { 
    max-width: 100%;
    display: flex;
    height:100vh;
    flex-wrap: wrap;
    width:100%;; 
    font-size:1rem;
    padding:1rem;
    opacity: 1;
    background-color:#131417;
 };
`



const Left = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
width:50%;
height:600px;
margin-left:10px;
color: white;
font-size:1rem;



@media only screen and (max-width:768px) { 
    display: flex;
    max-width:50%; 
    flex-wrap: wrap; 
    font-size:1rem;
    padding:1rem;
    opacity: 1;
    background-color:#131417;
};


@media only screen and (max-width:481px) { 
    display: flex;
    max-width:100%; 
    height:230px;
    flex-wrap: wrap;
    font-size:1rem;
    padding:1rem;
    opacity: 1;
  
 };
`



const Title1 = styled.h1`
display:flex;
height:300px;
font-size: 1.2rem;
color:#fa5d02;
margin-top:-100px;

@media only screen and (max-width:481px) { 
    display: flex;
    max-width:100%; 
    height:250px;
    flex-wrap: wrap;
    font-size:.8rem;
    margin-left:-60px;
    margin-top:-50px;
    opacity: 1;
    align-item:center;
  
 };
`

const Right = styled.div`
display:flex;
justify-content: center;
align-item: center;
height:600px;
width:45%;
background-color: none;

@media only screen and (max-width:768px) { 
    display: flex; 
    height:500px;
    flex-wrap: wrap; 
    padding:1rem;
    opacity: 1;
    height:400px;
    margin:auto;
    
};


@media only screen and (max-width:481px) { 
    display: flex;
    width:100%; 
    height:400px;
    flex-wrap: wrap; 
    margin:auto;
    padding:1rem;
    opacity: 1;
    margin:auto;
 }; 

`

const CoverPhoto = styled.div`
display:flex;
margin-top:100px;
width: 300px;
height:380px;
flex-wrap: wrap;
flex-direction: column;
align-items: right;
background-image:url(${ProfilePhoto});

@media only screen and (max-width:768px) { 
    display: flex;
    flex-wrap: wrap; 
    opacity: 1;
    margin:10px 10px;
    background-image:url(${ProfilePhoto})
};


@media only screen and (max-width:481px) { 
    display: flex;
    flex-wrap: wrap; 
    margin:auto;
    opacity: 1;
    background-image:url(${ProfilePhoto})
 }; 
`


const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 500px;
    height:200px;
    cursor: pointer;
    background-color:none; 
    font-size: 1rem;
    margin:auto;
    color:white;
`

const Card2 = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 300px;
    height:300px;
    cursor: pointer;
    background-color:none;
    font-size: 1rem;
    margin-top:-10px;
    margin-left:-30px;
`

export const MainPage =() =>{
    return(
    <Container> <Nav/>
   <Left>
    <Card1>
       <Title1>
          <h3>
            <h2>Hey! I am Jinto L. Das</h2> <h1>FRONTEND DEVELOPER</h1> Please scroll down to checkout my works. For more info please look into my resume and feel free to contact me!  </h3>
       </Title1>
    </Card1>
    </Left>

<Right>
    <Card2>
        <CoverPhoto></CoverPhoto>
    </Card2>
</Right>

     </Container>

     
    )
}