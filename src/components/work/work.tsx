import React from "react";
import Section from "../section";
import CompanyWorkCard from "./company-work-card";
import { workExperience } from "../../data/work.data";

const Work = () => {
  return (
    <Section
      title="Where I Made an Impact"
      highlight="Impact"
      showDivider={false}
    >
      <div className="flex flex-col gap-4 mt-5">
        {workExperience.map((work, index) => (
          <CompanyWorkCard
            key={index}
            logo={work.logo}
            company={work.company}
            role={work.role}
            duration={work.duration}
            description={work.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Work;
