import React from "react";
import "./Projects.scss";
const projectList = [
  {
    name: "Cueflash.com",
    url: "https://cueflash.com",
    image: "/images/projects/cueflash.png",
    description:
      "A flashcard based collaborative learning site which focuses on cards you don't know using an adaptive algorithm."
  },
  {
    name: "EditThis.info",
    url: "https://editthis.info",
    image: "/images/projects/editthis.png",
    description:
      "Shake-n-bake instant MediaWikis for groups, topics, or whatever"
  },

  {
    name: "Mix-Match Domains",
    url: "https://mixmatchdomains.com",
    image: "/images/projects/mixmatch.png",
    description:
      "Generate domains using related words to terms you provide. Terms can be individual words or comma seperated lists of words to randomly select from."
  },
  {
    name: "ConstantSail.com",
    url: "https://constantsail.com",
    image: "/images/projects/constantsail.png",
    description: "In-progress pirate, sailing, and trading game"
  },
  {
    name: "Glicko",
    url: "https://github.com/RobKohr/glicko",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Elo_rating_graph.svg/600px-Elo_rating_graph.svg.png",
    description:
      "Javascript implementation of glicko-2 rating system along with a ffa-team based setup."
  }
];
function Projects() {
  return (
    <div id="page-projects">
      <h2>Projects</h2>
      <p>
        These are personal, non-work-related projects. Contact my g-mail account
        at RobKohr for my resume to see what I built for others.
      </p>
      <p>
        Other little projects are at my{" "}
        <a href="https://github.com/robkohr">github page</a>
      </p>
      {projectList.map((p, i) => (
        <Project id={i} {...p} />
      ))}
      <div id="projects-end" />
    </div>
  );
}
function Project({ name, image, description, url }) {
  return (
    <div class="project">
      <a href={url}>
        <img src={image} alt="project icon" />
        <h3 class="name">{name}</h3>
      </a>
      <div class="description">{description}</div>
    </div>
  );
}

export default Projects;
