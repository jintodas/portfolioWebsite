import React from "react";
import styled from "styled-components";
import { MainPage } from "./MainPage";
import { About } from "../About/About";
import {PortfolioPage} from "../PortfolioPage/PortfolioPage"
import Footer from "../ui/footer"
import {ResumePage} from "../CV/ResumePage"

const Container = styled.div`
  background-color:#131417;
  width:100%;
  border:0;
`;

export const LandingPage =() =>{
  return (
    <Container>
      <MainPage/>
      <PortfolioPage/>
      <About/>
      <ResumePage/>
      <Footer/>
    </Container>
  );
};