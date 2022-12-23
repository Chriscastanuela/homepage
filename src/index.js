const sections = document.querySelectorAll(".section");

const intersectionObserver = new IntersectionObserver((entries) =>
  entries.forEach((i) => i.isIntersecting && i.target.classList.add("show"))
);

let sectionCount = 0;

sections.forEach((section) => {
  sectionCount += 1;
  sectionCount % 2 === 0
    ? section.classList.add("section__left")
    : section.classList.add("section__right");
});

sections.forEach((el) => intersectionObserver.observe(el));
