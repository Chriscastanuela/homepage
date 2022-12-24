const sections = document.querySelectorAll(".section");

const intersectionObserver = new IntersectionObserver((els) =>
  els.forEach((el) => el.isIntersecting && el.target.classList.add("fade"))
);

let sectionCount = 0;

sections.forEach((section) => {
  sectionCount += 1;
  sectionCount % 2 === 0
    ? section.classList.add("section__left")
    : section.classList.add("section__right");
});

sections.forEach((section) => intersectionObserver.observe(section));
