import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm trackign-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700" class="type">
            Hi, I'm <span className="text-[#2E77B2]">Devansh</span>
          </h1>
          <h1 className="py-2 text-gray-700">I'm a Venture Builder</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a business student passionate about leveraging technology and
            entrepreneurial skills to take companies to the next level.
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/gdevansh/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-[#2E77B2]" />
              </div>
            </a>
            <a href="https://www.instagram.com/itzdgofficial/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram className="text-[#2E77B2]" />
              </div>
            </a>
            <a href="mailto::devanshgandhi03@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-[#2E77B2]" />
              </div>
            </a>
            <a href="https://github.com/devanshg03">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-[#2E77B2]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
