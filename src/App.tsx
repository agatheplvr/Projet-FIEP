import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
// import MoviePage from "./views/MoviePage";
import RegistrationMenteePage from './views/RegistrationMenteePage'
import DashboardMenteePage from './views/DashboardMenteePage'
import RegistrationMentorPage from './views/RegistrationMentorPage'
import DashboardMentorPage from './views/DashboardMentorPage'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Role from "./views/Role";

export default function App() {
  return (
    <AppContainer>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/role" element={<Role />} />
          <Route path="/login-mentee" element={<RegistrationMenteePage />} />
          <Route path="/dashboard-mentee" element={<DashboardMenteePage />} />
          <Route path="/login-mentor" element={<RegistrationMentorPage />} />
          <Route path="/dashboard-mentor" element={<DashboardMentorPage />} />
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/movie/:id" element={<MoviePage />}></Route> */}
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
