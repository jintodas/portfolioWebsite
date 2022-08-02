import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from "../ui/Nav";
import ProfilePhoto from "../LandingPage/profilephoto.jpg"



const Container = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
height:100%;
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
    height:90vh;
    flex-wrap: wrap;
    max-width:100%;; 
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
margin-left:20px;
color: white;
align-items: center;
font-size:2rem;
justify-content: center;


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
    height:350px;
    flex-wrap: wrap;
    font-size:1rem;
    padding:1rem;
    opacity: 1;
  
 };
`



const Title1 = styled.h1`
display:flex;
height:200px;
font-size: 2rem;
align-item:center;
color:#fa5d02;

@media only screen and (max-width:481px) { 
    display: flex;
    max-width:100%; 
    height:200px;
    flex-wrap: wrap;
    font-size:1.5rem;
    margin-top:0;
    padding:1rem;
    opacity: 1;
  
 };
`

const Right = styled.div`
display:flex;
justify-content: center;
height:600px;
width:45%;
background-color: none;

@media only screen and (max-width:768px) { 
    display: flex;
    width:45%; 
    height:600px;
    flex-wrap: wrap; 
    padding:1rem;
    opacity: 1;
    margin-bottom:20px;
    margin:auto;
};


@media only screen and (max-width:481px) { 
    display: flex;
    width:100%; 
    flex-wrap: wrap; 
    margin:auto;
    padding:1rem;
    opacity: 1;
    height:500px;
    margin:auto;
    margin-bottom:20px;
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
    margin:10px 20px;
    background-image:url(${ProfilePhoto})
};


@media only screen and (max-width:481px) { 
    display: flex;
    flex-wrap: wrap; 
    margin:auto;
    opacity: 1;
    margin:10px 10px;
    background-image:url(${ProfilePhoto})
 }; 

`


const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 450px;
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
    width: 350px;
    height:400px;
    cursor: pointer;
    background-color:none;
    font-size: 1rem;
    margin:40px 0px;
`

export const MainPage =() =>{
    return(
    <Container> <Nav/>
   <Left>
    <Card1>
       <Title1>
          <h3>Hey! It is Jinto Lal Das. An aspiring..<h1>Frontend Developer</h1> </h3>
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