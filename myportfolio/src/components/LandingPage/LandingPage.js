import React from "react";
import styled from "styled-components";
import Nav from "../ui/Nav";
import { MainPage } from "./MainPage";
import { About } from "../About/About";
import {PortfolioPage} from "../PortfolioPage/PortfolioPage"
import Footer from "../ui/footer"

export const LandingPage =() =>{
  return (
    <>
      <Nav/>
      <MainPage/>
      <About/>
      <PortfolioPage/>
      <Footer/>
      
    </>
  );
};