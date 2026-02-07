let menuicon = document.getElementById("menu-icon");
let navmenu = document.querySelector("nav-menu");

menuicon.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((click) => {
  click.addEventListener("click", () => {
    navmenu.classList.toggle("active");
  });
});

let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  section.forEach((section) => {
    let top = window.scrollY;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    let offset = section.offsetTop - 200;
    if (top >= offset && top < offset + height) {
      navlink.forEach((navlink) => {
        navlink.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
