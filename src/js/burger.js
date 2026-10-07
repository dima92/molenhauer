export const initBurger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const body = document.body;

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("burger--active");
      nav.classList.toggle("nav--open");
      body.classList.toggle("disable-scroll");
    });

    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("burger--active");
        nav.classList.remove("nav--open");
        body.classList.remove("disable-scroll");
      });
    });
  }
};
