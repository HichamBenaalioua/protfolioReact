import React from "react";

const experiences = [
  {
    entrepirse: "2MSYNERGY SARL, FES",
    entreprise: "exp 1",
    technologies:
      "React.js  -  Next.js  -  Sanity CMS  -  Node.js  -  Tailwind",
    period: "JUI 2022 - SEP 2022",
  },
  {
    entrepirse: "TECHNOPECK, AGADIR",
    title: "Stagaire",
    technologies: "Vue.js  -  Laravel  -  Tailwind  -  Flutter",
    period: "mai 2020 - SEP 2021",
  },
  {
    entrepirse: "WSOFT, AGADIR",
    title: "Stagaire",
    technologies: "React.js  -  C#  -  ASP.NET  -  Bootstrap",
    period: "Feb 2019 - Mar 2019",
  },
];
function Experience() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full">
      {experiences.map((experience, index) => (
        <div
          key={index}
          class={
            index === 0
              ? "block  p-6  rounded-lg shadow  bg-gray-800 border-gray-700 w-[700px]"
              : " block mt-14  p-6  rounded-lg shadow  bg-gray-800 border-gray-700 w-[700px]"
          }
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
            {experience.entrepirse}
          </h5>
          <h5 class="mb-2 text-1xl font-light tracking-tight  text-white">
            {experience.title}
          </h5>
          <h5 class="mb-2 text-1xl font-light tracking-tight  text-white">
            {experience.technologies}
          </h5>
          <h5 class="mb-2 text-1xl font-normal tracking-tight  text-white">
            {experience.period}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Experience;
