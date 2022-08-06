import React from "react";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer"
import ResumeImage  from '../CV/cvLaptop.png';
import resumeMobile from '../CV/cvMobile.png';
import resumeIpad from '../CV/cvIpad.png';




const Container = styled.div`
  max-height:100%;
  flex-direction:row;
  justify-content:center;
  align-item:center;
  max-width:100%;
  background-color:#131417;
  flex-wrap: wrap;
  margin:auto;
  font-size:1rem;
  margin-bottom:10px;

@media only screen and (max-width:481px) { 
  padding:1rem;
  opacity: 1;
  margin-bottom:10px;
  width:100%;
 
};

@media only screen and (max-width:768px) { 
  opacity:1; 
  font-size:1.2em;
  width:100%;
  margin: auto;
};

@media only screen and (max-width:1024px) { 
  opacity:1; 
  font-size:1.2em;
  
};
`


const Title =styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
height:80px;
background-color:#131417;
justify-content:center;
align-item:center;
font-size:1.5rem;
color:#fc9e05;
padding:1rem;
margin-top:-35px;
margin-bottom:20px;



@media only screen and (max-width: 481px){ 
  opacity:1;
  height:30px;
  font-size:2rem
};

@media only screen and (max-width:768px) { 
  height:65px;
  opacity:1;
  font-size:1.5rem;
};
`

const CV = styled.div`
    justify-content:center;
    align-item:center;
    display: flex;
    flex-direction:row
    flex-wrap: wrap;
    width: 900px;
    height:1260px;
    margin:20px 20px;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-image:url(${ResumeImage});
    margin:auto;
    background-color:#131417;

   @media only screen and (max-width:768px) { 
    justify-content:center;
    margin-top:20px;
    height:1000px;
    width:100%;
    background-image:url(${resumeIpad});
    background-color:#131417;
  };

    @media only screen and (max-width:481px) { 
    justify-content:center;
    width:100%;
    margin:auto;
    height:518px;
    background-image:url(${resumeMobile});
 };
`

  export const ResumePage =() =>{
  return (
    <>
   <Container>

     <Title><h2>RESUME</h2></Title>
  <CV></CV>
  </Container>
     
     
      
    </>
  );
};