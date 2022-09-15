// Adiciona background ao header
const headerNav = document.querySelector(".header--container");

function addBackground() {
  if (document.documentElement.scrollTop !== 0) {
    headerNav.classList.add("header__bg");
  } else {
    headerNav.classList.remove("header__bg");
  }
}
document.addEventListener("scroll", addBackground);

// =====================menu responsivo===================
const btnMenu = document.querySelector(".btn-menu");
const menuNav = document.querySelector(".menu--nav__container");

function toggleMenu(event) {
  if (event.type === "touch") event.preventDefault();
  menuNav.classList.toggle("active");
  const active = menuNav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touch", toggleMenu);

const menuItem = document.querySelectorAll(".menu--nav__item");

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    menuNav.classList.toggle("active");
  });
  item.addEventListener("touch", function (event) {
    event.preventDefault();
    menuNav.classList.toggle("active");
  });
});
