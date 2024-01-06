(async () => {
  await tsParticles.load("tsparticles", {
    particles: {
      color: {
        value: "#C3073F",
      }
    },
    background: {
      color: {
        value: "#1A1A1D",
      }
    },
    preset: "firefly",
  });
})();

const seeProjects = () => {
  const projects = document.getElementById("projects");
  return projects.scrollIntoView();
};

const viewProj = document.getElementById("view-proj");
viewProj.addEventListener("click", seeProjects);
