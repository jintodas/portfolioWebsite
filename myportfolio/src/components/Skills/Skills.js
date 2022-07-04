import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
height:1000px;
max-width:100%;
flex-wrap: wrap;
justify-comntent:center;
background-color:#ffff;
align-items;
color:black;
`

const TitleDiv = styled.div`
height:100px;
max-width:100%
margin:auto;
flex-wrap: wrap;
text-align:center;
font-size:3em;
margin:20px 10px;
color:black;

`

const Left = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height:100vh;
background-color: none;
color: white;
align-items: center;
justify-content: center;
color:black;
`
const DivLeftP= styled.div`
display: flex;
flow-direction: coloumn;
align-item:center;
height:100vh;
display:flex;
text-color:#ffff;
font-size:3rem;
margin: 10rem;
padding:20px;
color:black;
`

export const Skills =() =>{
    return(
       
    <Container>
        <TitleDiv>
        <h1>SKILLS</h1>
        </TitleDiv>
 
 
<Left>
   <DivLeftP> 
    
    <h2>HTML, CSS, Flexbox, JavaScript, Responsive Design, SCSS,
    React, React Hooks, Node.js, Mongo DB,    Web-Accessibility, Figma,
    API:s, Mob-Programming, Pair-Programming, Github, Mongoose,
    Express.js, & Styled Components.</h2>    
   
     </DivLeftP>
</Left>

</Container>

     
    )
}