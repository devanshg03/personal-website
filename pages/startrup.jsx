import Projectdesc from "@/components/Projectdesc";
import React from "react";
import startrupImg from "../public/assets/projects/startrup.png";

const startrup = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="Startr Up"
        backgroundImg={startrupImg}
        type="Coding Project"
        pageUrl="https://github.com/devanshg03/Statr-Up"
        desc="This was an idea I had to make a tinder-style app that would match aspiring entrepreneurs with a startup idea that someone else needed help on. I coded this project and made a very simple app to show to others and validate my idea. In the end, I realized matching people just based on the idea would not work as there is so much more to building a team."
        skill1="HTML"
        skill2="CSS"
        skill3="Python Flask"
        skill4="SQL"
        skill5="Product Testing"
        skill6="Customer Research"
      />
    </div>
  );
};

export default startrup;
