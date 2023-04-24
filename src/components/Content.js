import React from "react";

import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Experience from "./routes/Experience";
import Formations from "./routes/Formations";
import Projects from "./routes/Projects";
import Certifications from "./routes/Certifications";
function Content() {
  return (
    <div className="grow  w-screen pt-14 pb-14">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="formations" element={<Formations />} />
        <Route path="experiences" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certifications" element={<Certifications />} />
      </Routes>
    </div>
  );
}

export default Content;
