import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
