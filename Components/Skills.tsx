import React from "react";
import SkillItems from "./SkillItems";
import SkillLanguanges from "./SkillLanguanges";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-blue-400">Certification</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div className="">
          <SkillItems title="Figma for UI/UX Design" year="March 2024" />
          <SkillItems
            title="ITS - Artificial Intelligence"
            year="February 2024"
          />
          <SkillLanguanges
            skill1="HTML"
            skill2="CSS"
            skill3="Javascript"
            level1="w-[90%]"
            level2="w-[90%]"
            level3="w-[80%]"
          />
        </div>
        <div className="">
          <SkillItems title="Figma for UI/UX Design" year="March 2024" />
          <SkillItems
            title="ITS - Artificial Intelligence"
            year="February 2024"
          />
          <SkillLanguanges
            skill1="React js"
            skill2="Next js"
            skill3="Typescript"
            level1="w-[80%]"
            level2="w-[60%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
