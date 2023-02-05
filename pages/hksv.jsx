import Projectdesc from "@/components/Projectdesc";
import React from "react";
import hksvImg from "../public/assets/projects/hksv.png";

const hksv = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="Hong Kong Student Ventures"
        backgroundImg={hksvImg}
        type="Pro Bono Consulting"
        pageUrl="https://www.hkstudentventures.com"
        desc="Hong Kong Student Ventures is a student-led pro-bono consulting firm. We work with charities, non-profits, NGOs and startups to advise them on digital marketing solutions, strategy and management. Our program enables students to get hands-on consulting experience and increase the impact of charitable organizations."
        skill1="Consulting"
        skill2="Data Analysis"
        skill3="Strategic Planning"
        skill4="SEO Optimization"
        skill5="Social Media"
        skill6="R Programming"
      />
    </div>
  );
};

export default hksv;
