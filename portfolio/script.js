const projects = [
  {
    title: "Podly",
    summary:
      "A podcast app prototype that tailors its suggestions and recommendations to your preferences.",
    tags: ["Figma", "FigJam"],
    accent: "#2b1d1a",
    monogram: "P",
    image: "assets/images/podly.png",
    link: "https://www.figma.com/design/5urj0Zn0OshkcnxefVQzrv/Team-Ramsey-Designs?node-id=1-3&t=6AbRysWwhbsekrVX-1",
    processLink: "podly-process.html",
  },
  {
    title: "USCIS Redesign",
    summary: "A redesign of the United States Citizenship and Immigration Services website.",
    tags: ["Figma", "FigJam"],
    accent: "#183454",
    monogram: "US",
    image: "assets/images/uscis-card-cover.png",
    link: "https://www.figma.com/design/zAbAaQ7oVY7mE3z3dEwhAX/USCIS-Portal---Prototyping?node-id=17-1000&t=nosgoo9JMAwnY35l-1",
    processLink: "uscis-process.html",
  },
  {
    title: "Phase App",
    summary:
      "A period tracking app prototype that pairs exercise with phases of the menstrual cycle.",
    tags: ["Figma", "FigJam"],
    accent: "#167d8f",
    monogram: "PH",
    image: "assets/images/phase.png",
    link: "https://www.figma.com/design/zyTcm3DY9pk2UqGmXU99bS/Phase?node-id=0-1&t=VjGkB3YOY57jQsPX-1",
    processLink: "phase-process.html",
  },
  {
    title: "Spectate",
    summary: "A short animation for a made up company.",
    tags: ["Adobe After Effects", "Adobe Illustrator"],
    accent: "#2d2d2d",
    monogram: "SP",
    image: "assets/images/spectate.png",
    link: "spectate-animation.html",
    actionLabel: "View Animation",
    homePreview: false,
  },
  {
    title: "Quick Cuisine",
    summary: "A food delivery app prototype.",
    tags: ["Figma"],
    accent: "#2563EB",
    monogram: "QC",
    image: "assets/images/quick-cuisine.png",
    link: "https://www.figma.com/design/j1cZf0Y5yx7t0ZsPo18wfy/Final-Project?node-id=103-2061&t=RPEJnoMU15lceaqi-1",
    homePreview: false,
  },
];

const projectGrid = document.querySelector("#project-grid");

if (projectGrid) {
  const isHomePage = window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html");
  const visibleProjects = isHomePage
    ? projects.filter((project) => project.homePreview !== false)
    : projects;

  visibleProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const cover = project.image
      ? `<img class="project-image ${project.title.includes("USCIS") ? "project-image-contain" : ""}" src="${project.image}" alt="${project.title} project cover" />`
      : `<span class="project-monogram">${project.monogram}</span>`;

    card.innerHTML = `
      <div class="project-cover ${project.image ? "has-image" : ""}" style="background: ${project.accent}">
        ${cover}
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="tag-list">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a class="project-link" href="${project.link}">${project.actionLabel || "View Prototype"}</a>
          ${
            project.processLink
              ? `<a class="project-link project-link-secondary" href="${project.processLink}">View Process Page</a>`
              : ""
          }
        </div>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
