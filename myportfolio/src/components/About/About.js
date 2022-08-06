import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
height:90%;
max-width: 100%;
background-color:#131417;
justify-content: space-around;

@media only screen and (max-width:481px) { 
  padding:1rem;
  width:100%;
  opacity: 1;
  margin-bottom:10px;

`;


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
height:80px;
width:100%;
background-color:#131417;
color:#fc9e05;;
font-size:1.3rem;

@media only screen and (max-width:481px) { 
  opacity: 1;
  font-size:1.2rem;
  width:100%;

`;

const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 200px;
    height:300px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none; 
    font-size: 1rem;
    margin:auto;
    margin:40px;
    color:white;

    @media only screen and (max-width:481px) { 
      opacity: 1;
      font-size:.8rem;
      width: 200px;
      height:280px;
      margin:10px;
      margin:auto;
      margin:15px;
   };
    `

const Card2 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 200px;
    height:300px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none;
    font-size: 1rem;
    margin:40px;
    color:white;

    @media only screen and (max-width:481px) { 
      opacity: 1;
      font-size:.8rem;
      width: 200px;
      height:260px;
      margin:15px;
   };
   `

const Card3 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 200px;
    height:300px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none; 
    font-size: 1rem; 
    margin:40px;
    color:white;

    @media only screen and (max-width:481px) { 
      opacity: 1;
      font-size:.8rem;
      width: 200px;
      height:260px;
      margin:15px;
   }; 
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
font-size: 1rem;


@media only screen and (max-width:4810px) { 
  opacity: 1;
  font-size:.8rem;
  margin-top:-15px;
};



@media only screen and (max-width:768px) { 
  opacity: 1;
  font-size:.8rem;
};
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
       <Para> HTML, CSS, JavaScript, Flexbox, SCSS,
       React, Node.js, Mongo DB, Express.js, Phaser 3, Aframe
     </Para>
   </Card1>

      <Card2>
        <h2>SOFT SKILLS</h2>
        <Para> Agile, Kanban, Pair-Programming,  Web-Accessibility, Desgin Sprint, UX Design</Para>
    </Card2>

    <Card3>
      <h2>TOOLS</h2>
      <Para> Visual Studio, Github, Figma, Slack, Miro, Adobe Photoshop, Lightroom, Titled-Map Editor</Para>
    </Card3>

    </Right>
</Container>

     
    )
}