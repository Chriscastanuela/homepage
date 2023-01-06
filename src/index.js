const sections = document.querySelectorAll(".section");
const projectTypes = document.querySelectorAll(".project__type");
const projects = document.querySelectorAll(".project");

let sectionCount = 0;
let projectTypeCount = 0;
let projectCount = 0;

const intersectionObserver = new IntersectionObserver((els) =>
  els.forEach((el) => el.isIntersecting && el.target.classList.add("fade"))
);

sections.forEach((section) => {
  sectionCount % 2 === 0
    ? section.classList.add("section__left")
    : section.classList.add("section__right");
  sectionCount += 1;
});

projectTypes.forEach((projectType) => {
  projectTypeCount % 2 === 0
    ? (projectType.style.float = "left")
    : (projectType.style.float = "right");
  projectTypeCount += 1;
});

projects.forEach((project) => {
  projectCount % 2 === 0
    ? (project.style.float = "left")
    : (project.style.float = "right");
  projectCount % 2 === 0
    ? project.classList.add("section__left")
    : project.classList.add("section__right");
  projectCount += 1;
});

sections.forEach((section) => intersectionObserver.observe(section));
projects.forEach((project) => intersectionObserver.observe(project));
