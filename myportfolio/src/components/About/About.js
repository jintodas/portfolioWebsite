import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
height:100%;
max-width: 100%;
background-color:#131417;
justify-content: space-around;
`


const Right = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
height:100%;
width: 100%;
background-color: none;
color: black;
font-size:1.5rem;
justify-content: space-around;

`

const BigTitle = styled.h1`
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content:center;
margin:auto;
color:black;
height:100px;
width:100%;
background-color:#131417;
color:#ffff;
font-size:1.5rem;
`;

const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 350px;
    height:450px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none; 
    font-size: 1rem;
    margin:auto;
    margin:40px;
    color:white;

    @media only screen and (max-width:390px) { 
      padding:1rem;
      opacity: 1;
      height:600px;
    
  
   };


`

const Card2 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 350px;
    height:450px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none;
    font-size: 1rem;
    margin:40px;
    color:white;

`

const Card3 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 350px;
    height:450px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none; 
    font-size: 1rem; 
    margin:40px;
    color:white;

 
`

const Para = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
text-align:center:
align-item:center;
flex-wrap: wrap;
margin: 50px 10px;
cursor: pointer;
background-color:none; 
margin:auto;
padding:10px 80px;
font-size: 1.5rem;
`

export const About =() =>{
    return(
       
    <Container>
 
 
     <BigTitle>
        <h1>SKILLS</h1>
        </BigTitle>
    
    
    
<Right>

  <Card1>
    <h2>TECH SKILLS</h2>
       <Para> HTML, CSS, Flexbox, JavaScript ES6, Responsive Design, SCSS,
       React, React Hooks, Node.js, Mongo DB, Mongoose,
       Express.js, API, Styled Components,  Phaser, Aframe
     </Para>
      
     
   </Card1>

      <Card2>
        <h2>SOFT SKILLS</h2>

        <Para> Agile, Kanban, Mob-Programming, Pair-Programming,  Web-Accessibility, Desgin Sprint, UX Design</Para>

    </Card2>

    <Card3>
      <h2>TOOLS</h2>
      <Para>  Visual Studio, Github, Figma, Slack, Miro, Terminal, Adobe Photoshop, Lightroom, Titled</Para>
    </Card3>

    </Right>
</Container>

     
    )
}