import React from "react";

const certifications = [
  {
    nom: "Python Functions, Files, and Dictionaries",
    number: 1,
    instutition: "University of Michigan",
    link: "https://coursera.org/share/d2d1403d15c47bb0804003ed0da405ca",
    anne: "2022",
  },
  {
    nom: "DevOps, Cloud, and Agile Foundations",
    number: 2,
    instutition: "IBM",
    link: "https://www.coursera.org/account/accomplishments/specialization/ABW7AGCHD6CR",
    anne: "2023",
  },
  {
    nom: "Developing Back-End Apps with Node.js and Express",
    number: 3,
    instutition: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/V82FFRN7GDWC",
    anne: "2023",
  },
  {
    nom: "Data Collection and Processing with Python",
    number: 4,
    instutition: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/MH362J786KL4",
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
            class="w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={certification.link} target="_blank" rel="noreferrer">
              <img
                class="rounded-t-lg"
                src={require(`../../images/certif${certification.number}.jpeg`)}
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
                {certification.instutition}
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
