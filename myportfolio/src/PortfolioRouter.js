import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import {MainPage } from "./components/LandingPage/MainPage";
import{PortfolioPage} from "./components/PortfolioPage/PortfolioPage";
import{SinglePortfolioPage} from "./components/SinglePortfolioPage/SinglePortfolioPage";
import Footer from "./components/ui/footer";




export const PortfolioRouter = () =>{
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/categories" element={<MainPage />} />
            <Route path="/PortfolioPage" element={<PortfolioPage/>}/>
            <Route path="/singlePortfolio" element={<SinglePortfolioPage/>}/>
            <Route path="/categories" element={<Footer />} />
            </Routes>
        </Router>
    );
};