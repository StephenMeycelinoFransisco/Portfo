import React from "react";
import SkillItems from "./SkillItems";
import SkillLanguanges from "./SkillLanguanges";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-blue-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div className="">
          <SkillItems
            title="Figma for UI/UX Design"
            year="March 2024"
            desc="This certificate is obtained through completing tasks given by myskill.id to design a start page and detail page on the figma software."
          />
          <SkillItems
            title="Frontend Engineer"
            year="August - December 2023"
            desc="Became the project leader and member of the React JS frontend developer in the Healthify health system development process by getting a total score of 94 overall skills."
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
          <SkillItems
            title="ITS - Artificial Intelligence"
            year="February 2024"
            desc="Passed the artificial intelligence test from certiport by achieving a passing score of 700."
          />

          <SkillItems
            title="Introduction to Backend Engineering"
            year="May 2023"
            desc="This certificate was achieved through online learning organized by myskill.id for introduction to backend engineering."
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
