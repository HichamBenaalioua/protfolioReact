import React from "react";

const formations = [
  {
    nom: "Cycle d'ingénieur en Génie Informatique option MIAGE",
    ecole: "Ecole Marocaine des Sciences de l'ingénieur EMSI Marrakech",
    period: "2021 - en cours",
  },
  {
    nom: "DTS Technichien Spécialisé en Développement informatique",
    ecole: "Institut spécialisé de technologie appliquée Tasila Agadir",
    period: "2018 - 2020",
  },
  {
    nom: "(DEUG) / Physique – Chimie",
    ecole: "Université Ibn Zohr",
    period: "2016 - 2018",
  },
  {
    nom: "Baccalauréat Sciences expérimentales option sciences physiques",
    ecole: "Lycée Al Maarifa",
    period: "2014 - 2015",
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
