import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className=" w-screen bg-gray-300 flex  items-center justify-center">
      <div className="w-[500px] h-24  flex flex-row justify-evenly items-center">
        <SocialIcon url="https://linkedin.com/" bgColor="#1F2937" />
        <SocialIcon url="https://twitter.com/" bgColor="#1F2937" />
        <SocialIcon url="https://whatsapp.com/" bgColor="#1F2937" />
        <SocialIcon url="https://dribbble.com/" bgColor="#1F2937" />
        <SocialIcon url="https://behance.com/" bgColor="#1F2937" />
        <SocialIcon url="https://github.com/" bgColor="#1F2937" />
        <SocialIcon url="mailto:ali.hicham1997@gmail.com" bgColor="#1F2937" />
      </div>
    </div>
  );
}

export default Footer;
