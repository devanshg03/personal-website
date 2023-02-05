import React from "react";
import Projectdesc from "@/components/Projectdesc";
import diecastgamingImg from "../public/assets/projects/diecastgaming.png";

const diecastgaming = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="Diecast Gaming / Diecast Car Collector"
        backgroundImg={diecastgamingImg}
        type="Youtube Channel"
        pageUrl="https://www.youtube.com/c/diecastgaming"
        desc="When I was eleven, I was quite fascinated with the idea of having a YouTube channel and posting videos. Despite being in China, I decided to start shooting videos about my scale model cars. Eventually, I transitioned to posting more diverse content, including vlogs and then gaming videos. At the peak of my channel, I had over 1,000 subscribers and an active community."
        skill1="Content Sourcing"
        skill2="Video Editing"
        skill3="Social Media"
        skill4="Community Building"
        skill5="Graphic Design"
        skill6="Google Adsense"
      />
    </div>
  );
};

export default diecastgaming;
