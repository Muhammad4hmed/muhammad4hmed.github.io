// script.js

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});
