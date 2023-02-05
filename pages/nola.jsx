import Projectdesc from "@/components/Projectdesc";
import React from "react";
import nolaImg from "../public/assets/projects/nola.png";

const nola = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="Nola: Granola Machine"
        backgroundImg={nolaImg}
        type="Foodtech & Consumertech Startup"
        pageUrl="https://innoacademy.engg.hku.hk/nola/"
        desc="Nola is an upcoming food-tech / consumer-tech startup that aims to make fresh, and healthy snacks convinent. We will make a machine that makes fresh-granola snacks at the click of a button. Our food ecosystem will make snacking more sustainable by utilizing unused nutrition and reducing packaging waste. I work mainly on the machine and overall ecosystem product development."
        skill1="UI/UX Design"
        skill2="Product Design"
        skill3="Prototyping"
        skill4="3D Rendering"
        skill5="Research"
        skill6="Arduino"
      />
    </div>
  );
};

export default nola;
