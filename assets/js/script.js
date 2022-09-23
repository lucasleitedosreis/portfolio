// ===================================debounce usado no anime scroll====================================
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
// =======================================anime scroll================================
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}
animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 150),
  );
}
// Adiciona background ao header
// ===================================background header====================================

const headerNav = document.querySelector(".header--container");

function addBackground() {
  if (document.documentElement.scrollTop !== 0) {
    headerNav.classList.add("header__bg");
  } else {
    headerNav.classList.remove("header__bg");
  }
}
document.addEventListener("scroll", addBackground);

// =======================================menu responsivo================================
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

// =======================================active list skills responsivo================================
const viewMore = document.querySelectorAll(".view--more");

function showList() {
  this.previousElementSibling.classList.toggle("active");
  this.classList.toggle("active");
  if (this.innerText === "Ver mais") {
    this.innerText = "Ver menos";
  } else {
    this.innerText = "Ver mais";
  }
}

if (viewMore.length) {
  viewMore.forEach((view) => {
    view.addEventListener("click", showList);
  });
}
