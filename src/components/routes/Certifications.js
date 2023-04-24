import React from "react";

const certifications = [
  {
    nom: "certificat 1",
    description: "lorem ipsum dolor sit amet, consectetur adipis",
    path: "image1.jpg",
    link: "https://coursera.org/share/d2d1403d15c47bb0804003ed0da405ca",
    anne: "2022",
  },
  {
    nom: "certificat 2",
    description: "lorem ipsum dolor sit amet, consectetur adipis",
    path: "image1.jpg",
    link: "https://coursera.org/share/d2d1403d15c47bb0804003ed0da405ca",
    anne: "2022",
  },
  {
    nom: "certificat 3",
    description: "lorem ipsum dolor sit amet, consectetur adipis",
    path: "image1.jpg",
    link: "https://coursera.org/share/d2d1403d15c47bb0804003ed0da405ca",
    anne: "2022",
  },
  {
    nom: "certificat 4",
    description: "lorem ipsum dolor sit amet, consectetur adipis",
    path: "image1.jpg",
    link: "https://coursera.org/share/d2d1403d15c47bb0804003ed0da405ca",
    anne: "2022",
  },
  {
    nom: "certificat 5",
    description: "lorem ipsum dolor sit amet, consectetur adipis",
    path: "image1.jpg",
    link: "https://coursera.org/share/d2d1403d15c47bb0804003ed0da405ca",
    anne: "2022",
  },
];

function Certifications() {
  return (
    <div className="flex w-sreen  items-center justify-center">
      <div className="grid grid-cols-3 gap-4 gap-y-14">
        {certifications.map((certification, index) => (
          <div
            key={index}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={certification.link} target="_blank" rel="noreferrer">
              <img
                class="rounded-t-lg"
                src={require("../../images/certif1.jpeg")}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href={certification.link} target="_blank" rel="noreferrer">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {certification.nom}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {certification.description}
              </p>
              <h5 class="mb-2 text-1xl font-light tracking-tight text-gray-900 dark:text-white">
                {certification.anne}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
