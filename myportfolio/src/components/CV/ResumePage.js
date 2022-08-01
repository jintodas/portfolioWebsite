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


@media only screen and (max-width:481px) { 
  opacity:1;
  font-size:1.2em;
};

@media only screen and (max-width:768px) { 
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
flex-wrap: wrap;
height:130px;
background-color:#131417;
justify-content:center;
align-item:center;
font-size:3em;
color:#ffff;

@media only screen and (max-width: 481px){ 
  opacity:1;
  height:30px;
  font-size:3em
};

@media only screen and (max-width:768px) { 
  height:30px;
  opacity:1;
  font-size:3em;
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
  
     @media only screen and (max-width:481px) { 
      justify-content:center;
      height:800px;
      margin:20px 20px;
      background-image:url(${resumeMobile});
   };

   @media only screen and (max-width:768px) { 
    justify-content:center;
    height:1000px;
    margin:20px 20px;
    background-image:url(${resumeIpad});
  };
`

  export const ResumePage =() =>{
  return (
    <>
   <Container>
   <Nav/>
     <Title>RESUME</Title>
  <CV></CV>
  </Container>
      <Footer/>
      
    </>
  );
};