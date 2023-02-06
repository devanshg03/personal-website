import Image from "next/image";
import Link from "next/link";
import React from "react";
import nolaImg from "../public/assets/projects/nola.png";
import esoImg from "../public/assets/projects/eso.png";
import hksvImg from "../public/assets/projects/hksv.png";
import vcmemoImg from "../public/assets/projects/vcmemo.png";
import startrupImg from "../public/assets/projects/startrup.png";
import caesdImg from "../public/assets/projects/caesd.png";
import xtrailImg from "../public/assets/projects/xtrail.png";
import diecastgamingImg from "../public/assets/projects/diecastgaming.png";
import Projectitem from "./Projectitem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#2E77B2]">
          Projects
        </p>
        <h2 className="py-4">What I've Worked On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectitem
            title="Nola: Granola Machine"
            backgroundImg={nolaImg}
            projectUrl="nola"
            year="2022 - Present"
          />

          <Projectitem
            title="ESo Ventures"
            backgroundImg={esoImg}
            projectUrl="eso"
            year="2021 - Present"
          />

          <Projectitem
            title="HK Student Ventures"
            backgroundImg={hksvImg}
            projectUrl="hksv"
            year="2022 - Present"
          />

          <Projectitem
            title="The VC Memo"
            backgroundImg={vcmemoImg}
            projectUrl="vcmemo"
            year="2022"
          />

          <Projectitem
            title="Statr Up"
            backgroundImg={startrupImg}
            projectUrl="startrup"
            year="2022"
          />

          <Projectitem
            title="CAESD: Custom Phone Cases"
            backgroundImg={caesdImg}
            projectUrl="caesd"
            year="2021"
          />

          <Projectitem
            title="@Nissan X-Trail Official"
            backgroundImg={xtrailImg}
            projectUrl="xtrail"
            year="2018 - 2021"
          />

          <Projectitem
            title="Diecast Gaming / Diecast Car Collector"
            backgroundImg={diecastgamingImg}
            projectUrl="diecastgaming"
            year="2014 - 2010"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
