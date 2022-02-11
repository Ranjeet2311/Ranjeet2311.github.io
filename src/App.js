import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/AboutMe";
import Skills from "./component/pages/Skills";
import Projects from "./component/pages/Projects";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/upgraded" element={<Home />} />
          <Route path="/upgraded/about-me" element={<About />} />
          <Route path="/upgraded/skills" element={<Skills />} />
          <Route path="/upgraded/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
