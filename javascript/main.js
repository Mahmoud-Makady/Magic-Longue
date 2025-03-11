let tabs = document.querySelectorAll(".tabs button");
let foodCats = document.querySelectorAll(".food-category");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    foodCats.forEach((cat) => {
      cat.classList.remove("active");
      if (e.currentTarget.id === cat.id) {
        cat.classList.add("active");
      }
    });
  });
});
//menu ================================
let menuButt = document.querySelector("header .menu");
let exitButt = document.querySelector("header .exit");
let nav = document.querySelector("header nav");
menuButt.addEventListener("click", () => {
  nav.style.right = "0";
});
exitButt.addEventListener("click", () => {
  nav.style.right = "-232px";
});
let links = document.querySelectorAll("header .links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.right = "-232px";
  });
});
