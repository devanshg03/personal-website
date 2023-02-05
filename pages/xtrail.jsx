import React from "react";
import Projectdesc from "@/components/Projectdesc";
import xtrailImg from "../public/assets/projects/xtrail.png";

const xtrail = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="@Nissan X-Trail Official"
        backgroundImg={xtrailImg}
        type="Social Media Page"
        pageUrl="https://www.instagram.com/nissanxtrailofficial/"
        desc="I started an Instagram page to connect with owners of Nissan X-Trail and share people's unique cars from all over the world, with different modifications and acessories. Eventually, I stopped posting on this page due to a lack of time, but it has still gained over 1,100 followers. This was just a project I started to get involved in the car enthusiast community."
        skill1="Content Sourcing"
        skill2="Photography"
        skill3="Social Media"
        skill4="Community Building"
        skill5="Graphic Design"
        skill6="Customer Research"
      />
    </div>
  );
};

export default xtrail;
