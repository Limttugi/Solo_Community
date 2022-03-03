import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import TopNav from "./components/TopNav";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyInfo from "./pages/MyInfo";
import Hot from "./pages/Post_Hot";
import Latest from "./pages/Post_Latest";
import Recommend from "./pages/Post_Recommend";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/info" element={<MyInfo />} />
        <Route path="/hot" element={<Hot />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
