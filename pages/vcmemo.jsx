import Projectdesc from "@/components/Projectdesc";
import React from "react";
import vcmemoImg from "../public/assets/projects/vcmemo.png";

const vcmemo = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="The VC Memo"
        backgroundImg={vcmemoImg}
        type="Venture Capital Newsletter"
        pageUrl="/"
        desc="This was a project I worked briefly on to start a venture capital focused newsletter for University students interested in the startup and venture capital industry. This was intended to be a weekly newsletter that would cover the overview of the public markets, recap the 5 biggest venture capital deals closed that week and then take a deep-dive into an interesting startup."
        skill1="Venture Capital"
        skill2="Writing"
        skill3="Newsletter Design"
        skill4="SEO Optimization"
        skill5="Social Media"
        skill6="Content Sourcing"
      />
    </div>
  );
};

export default vcmemo;
