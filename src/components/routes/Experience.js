import React from "react";

const experiences = [
  {
    nom: "nom 1",
    title: "exp 1",
    period: "2018-2020",
  },
  {
    nom: "nom 2",
    title: "exp 1",
    period: "2018-2020",
  },
  {
    nom: "nom 3",
    title: "exp 1",
    period: "2018-2020",
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
            {experience.nom}
          </h5>
          <h5 class="mb-2 text-1xl font-light tracking-tight  text-white">
            {experience.title}
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
