import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import TopNav from "./components/TopNav";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyInfo from "./pages/MyInfo";
import PostLatest from "./pages/Post";
import PostHot from "./pages/Post_Hot";
import PostRecommend from "./pages/Post_Recommend";

const App = () => {
  return (
    <BrowserRouter>
      <section className="topContainer">
        <Header />
        <TopNav />
      </section>
      <section className="bodyContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/info" element={<MyInfo />} />
          <Route path="/post" element={<PostLatest />} />
          <Route path="/post/hot" element={<PostHot />} />
          <Route path="/post/recommend" element={<PostRecommend />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
