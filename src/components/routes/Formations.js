import React from "react";

const formations = [
  {
    nom: "nom 1",
    ecole: "ecole 1",
    period: "2018-2020",
  },
  {
    nom: "nom 2",
    ecole: "ecole 1",
    period: "2018-2020",
  },
  {
    nom: "nom 3",
    ecole: "ecole 1",
    period: "2018-2020",
  },
];

function Formations() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full">
      {formations.map((formation, index) => (
        <div
          key={index}
          class={
            index === 0
              ? "block  p-6  rounded-lg shadow  bg-gray-800 border-gray-700 w-[700px]"
              : " block mt-14  p-6  rounded-lg shadow  bg-gray-800 border-gray-700 w-[700px]"
          }
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
            {formation.nom}
          </h5>
          <h5 class="mb-2 text-1xl font-light tracking-tight  text-white">
            {formation.ecole}
          </h5>
          <h5 class="mb-2 text-1xl font-normal tracking-tight  text-white">
            {formation.period}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Formations;
