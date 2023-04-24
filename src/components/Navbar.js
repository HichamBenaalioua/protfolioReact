import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-300 w-screen h-14 flex justify-center items-center">
      <ul className="flex flex-row justify-evenly items-center h-14 w-[600px] text-zinc-950">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/formations">Formations</NavLink>
        </li>
        <li>
          <NavLink to="/experiences">Expériences</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/certifications">Certifications</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
