import React from "react";
import image from "../images/d.jpg";
import video from "../images/video.mp4";
function Header() {
  return (
    <div className=" w-screen h-[32rem]  text-white flex flex-col items-center justify-center ">
      <video
        className="object-cover w-full h-[32rem] -z-10 absolute bg-gray-800"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex flex-col justify-evenly items-center h-[380px]">
        <img
          className="object-cover w-56 h-56 rounded-full "
          src={image}
          alt="Hicham benaalioua"
        />
        <h1 className="text-4xl font-bold">Hicham Benaalioua</h1>
        <h2 className="text-2xl font-light">
          Etudiant 4eme annee Ingenieurie Informatique et Reseau en EMSI
        </h2>
      </div>
    </div>
  );
}

export default Header;
