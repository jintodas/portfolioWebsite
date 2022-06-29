import React from "react";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer"
import ResumeImage  from '../CV/resume.png';

const Container = styled.div`
  height:1500px;
  width:100%
  flex-wrap: wrap;
  justify-comntent:center;
  background-color:#ffff;
  align-items;
`;


const Title =styled.div`
height:100px;
width:100%
margin:auto;
flex-wrap: wrap;
background-color:#ffff;
text-align:center;
font-size:3em;
margin:20px 10px;
`

const CV = styled.div`
    display: flex;
    flex-direction:row;
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
    align-items:center;
    margin:auto;
`

  export const ResumePage =() =>{
  return (
    <>
      <Nav/>
   <Container>
     <Title> Resume</Title>
  <CV></CV>
  </Container>
      <Footer/>
      
    </>
  );
};