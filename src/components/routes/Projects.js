import React from "react";

const projects = [
  {
    nom: "project 1",
    description: "lorem ipsum dolor sit amet dolor sit amet",
    link: "https://www.github.com/",
  },
  {
    nom: "project 2",
    description: "lorem ipsum dolor sit amet dolor sit amet",
    link: "https://www.github.com/",
  },
  {
    nom: "project 3",
    description: "lorem ipsum dolor sit amet dolor sit amet",
    link: "https://www.github.com/",
  },
  {
    nom: "project 4",
    description: "lorem ipsum dolor sit amet dolor sit amet",
    link: "https://www.github.com/",
  },
];

function Projects() {
  return (
    <div className="flex w-sreen  items-center justify-center">
      <div className="grid grid-cols-3 gap-4 gap-y-14">
        {projects.map((project, index) => (
          <div
            key={index}
            class="max-w-sm ml-14 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.nom}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              voir le projet
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
