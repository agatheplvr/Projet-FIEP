import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage";
import RegistrationPage from './views/RegistrationPage'
import DashboardPage from './views/DashboardPage'
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <AppContainer>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/login" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<MoviePage />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dfe6e9;
`;
