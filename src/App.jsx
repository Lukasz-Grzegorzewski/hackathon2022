import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Card from "./pages/Card";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
