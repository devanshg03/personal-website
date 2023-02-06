import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2E77B2]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I was born in Shenzhen and did my junior elementary in China. Later,
            I moved to Hong Kong for my senior elementary to University
            education. I am currently pursuing my BBA in Finance and
            Entrepreneurship, Design, and Innovation (EDI) at the University of
            Hong Kong. I am fluent in four languages: English, Hindi, Cantonese,
            and Mandarin.
          </p>
          <p className="py-2 text-gray-600">
            I am passionate about technology and the ways it can be used to
            improve our quality of life. This is why I am interested in
            entrepreneurship and building cool products, services, and
            communities. Even though I am a business student, I am always eager
            to learn more about the technical side of things.
          </p>
          <Link scroll={false} href="/#projects">
            <p className="py-2 text-[#2E77B2] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="assets/about.jpg"
            alt="image of a laptop with the lid open"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
