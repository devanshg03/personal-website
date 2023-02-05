import Projectdesc from "@/components/Projectdesc";
import React from "react";
import caesdImg from "../public/assets/projects/caesd.png";

const vcmemo = () => {
  return (
    <div className="w-full">
      <Projectdesc
        title="CAESD"
        backgroundImg={caesdImg}
        type="Design / Ecommerce"
        pageUrl="https://web.archive.org/web/20220821071107/https://www.caesdhk.com/"
        desc="This is a my first startup, an e-commerce store that allows people to have customized phone cases. I designed and sources phone cases on demand for customers, and achieved a revenue of 4 digits in 6 months. Ultimately I realized this was not something I would like to pursue as it did not have a technological or much of a competitive advantage over other phone cases."
        skill1="Shopify"
        skill2="Affinity Suite"
        skill3="Social Media"
        skill4="Product Sourcing"
        skill5="Instagram Ads"
        skill6="Customer Research"
      />
    </div>
  );
};

export default vcmemo;
