import React from "react";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer"
import ResumeImage  from '../CV/resume.png';
import resumeMobile from '../CV/resumeMobile.png';
import resumeIpad from '../CV/resumeIpad.png';

const Container = styled.div`
  flex-direction:row;
  height:1500px;
  width:100%;
  flex-wrap: wrap;
  justify-content:center;
  background-color:#020d36;
  align-item:center;
  margin:auto;
`;


const Title =styled.div`
display:flex;
flex-direction:row;
height:100px;
flex-wrap: wrap;
background-color:#020d36;
justify-content:center;
align-item:center;
font-size:4em;
margin:auto;
margin:20px 10px;
color:white;


@media only screen and (max-width:390px) { 
  padding:1rem;
  opacity:1;
  height:20px;
  font-size:4em;
};

@media only screen and (max-width:1024px) { 
  padding:1rem;
  opacity:1;
  height:30px;
  font-size:4em;
};

`

const CV = styled.div`
    display: flex;
    flex-direction:row
    justify-content:center;
    align-item:center;
    flex-wrap: wrap;
    width: 900px;
    height:1300px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff; 
    background-image:url(${ResumeImage});
    margin:auto;

     @media only screen and (max-width:390px) { 
      padding:1rem;
      opacity: 1;
      height:80%;
      margin:10px 10px;
      background-image:url(${resumeMobile});
  
   };

   @media only screen and (max-width:1024px) { 
    padding:1rem;
    opacity: 1;
    height:80%;
    margin:10px 10px;
    background-image:url(${resumeIpad});
    margin:auto;
 };

`


  export const ResumePage =() =>{
  return (
    <>
      <Nav/>
   <Container>
     <Title>RESUME</Title>
  <CV></CV>
  </Container>
      <Footer/>
      
    </>
  );
};