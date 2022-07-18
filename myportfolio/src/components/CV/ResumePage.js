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
  background-color:#131417;
  align-item:center;
  margin:auto;

@media only screen and (max-width:481px) { 
  opacity:1;
  font-size:1.2em;
};

@media only screen and (max-width:1024px) { 
  opacity:1; 
  font-size:1.2em;
};
`


const Title =styled.div`
display:flex;
flex-direction:row;
height:130px;
flex-wrap: wrap;
background-color:#131417;
justify-content:center;
align-item:center;
font-size:3em;
margin:auto;
color:#ffff;

@media only screen and (max-width: 481px){ 
  opacity:1;
  height:30px;
  font-size:3em
};

@media only screen and (max-width:768px) { 
  opacity:1;
  font-size:3em;
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
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff; 
    background-image:url(${ResumeImage});
    margin:auto;

     @media only screen and (max-width:481px) { 
      display: flex;
      flex-direction:row
      justify-content:center;
      margin:0 10px;
      background-image:url(${resumeMobile});
   };

   @media only screen and (max-width:768px) { 
    justify-content:center;
    background-image:url(${resumeIpad});
    margin:0 10px;
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