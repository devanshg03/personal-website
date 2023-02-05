import Projectdesc from "@/components/Projectdesc";
import React from "react";
import esoImg from "../public/assets/projects/eso.png";

const eso = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="ESo Ventures – Entrepreneur Society HKU"
        backgroundImg={esoImg}
        type="Entrepreneurship & Venture Capital Student Club"
        pageUrl="https://entrepreneur-society-hku.webflow.io"
        desc="ESo Ventures is a project that aims to create a comprehensive angel investment network for startups. The way we contribute is by working with VCs to train students in startup investment, and having student talent source and do due dilligence on investment targets. We then connect these companies to our network of angel investors along with providing our free due dilligence."
        skill1="Deal Sourcing"
        skill2="Due Dilligence"
        skill3="Recruitment"
        skill4="Networking"
        skill5="Event Organization"
        skill6="Startups"
      />
    </div>
  );
};

export default eso;
