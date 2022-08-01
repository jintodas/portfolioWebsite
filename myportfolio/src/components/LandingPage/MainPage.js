import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import photoMobile from "../LandingPage/profileMobile.png"
import photoTablet from "../LandingPage/profileTablet.png"
import photoIpadpro from "../LandingPage/photoIpadpro.png"
import photoLaptop from "../LandingPage/photoLaptop.png"
import photoDesktop from "../LandingPage/desktop.png"
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
width:45%;
height:600px;
margin-left:20px;
color: white;
align-items: center;
font-size:2rem;
justify-content: center;


@media only screen and (max-width:768px) { 
    display: flex;
    max-width:100%; 
    flex-wrap: wrap; 
    font-size:1.5rem;
    padding:1rem;
    opacity: 1;
    margin-top:50px;
    background-color:#131417;
};


@media only screen and (max-width:481px) { 
    display: flex;
    max-width:100%; 
    height:250px;
    flex-wrap: wrap;
    max-width:100%;; 
    font-size:1rem;
    padding:1rem;
    opacity: 1;
  
 };
`



const Title1 = styled.h1`
display:flex;
height:20px;
font-size: 2rem;
align-item:center;
color:#fa5d02;
padding:.5rem;
`

const Title2 = styled.h1`
display:flex;
font-size: 2rem;
align-item:center;
color:#ff03f2;
`

const Right = styled.div`
display:flex;
height:500px;
width:45%;
background-color: none;
color: white;
font-size:2rem;

@media only screen and (max-width:768px) { 
    display: flex;
    width:90%; 
    flex-wrap: wrap; 
    padding:1rem;
    opacity: 1;
    margin-top:0px;
};


@media only screen and (max-width:481px) { 
    display: flex;
    flex-wrap: wrap; 
    max-width:90%;
    margin:auto;
    padding:1rem;
    opacity: 1;
 }; 


`

const CoverPhoto = styled.div`
display:flex;
margin-top:100px;
width : 300px;
height:380px;
color: white;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: right;
background-image:url(${ProfilePhoto});

@media only screen and (max-width:768px) { 
    display: flex;
    height:380px;
    width:90%; 
    flex-wrap: wrap; 
    padding:1rem;
    opacity: 1;
    margin-top:0px;
    background-image:url(${ProfilePhoto})
};


@media only screen and (max-width:481px) { 
    display: flex;
    height:380px;
    flex-wrap: wrap; 
    max-width:90%;
    margin:auto;
    opacity: 1;
    margin-top:0px;
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

//     @media only screen and (max-width:390px) { 
//       padding:1rem;
//       opacity: 1;
//       height:600px;
//    };
`

const Card2 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 350px;
    height:450px;
    cursor: pointer;
    background-color:none;
    font-size: 1rem;
    margin:40px;
`

export const MainPage =() =>{
    return(
    <Container> <Nav/>
   <Left>
    <Card1>
       <Title1>
          <h4>Portfolio - Jinto Lal Das</h4>
       </Title1>
       <Title2>
          <h2>Frontend Developer</h2>
       </Title2>
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