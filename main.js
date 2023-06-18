let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let portLayer = document.querySelector("#port-layer");
let arrow = document.querySelector("#arrow");
let modes = document.getElementById("modes");

modes.addEventListener("click", function () {
  modes.classList.toggle("bxs-sun");
  document.body.classList.toggle("active-mode");
});

arrow.onclick = () => {
  arrow.classList.toggle("bx-x");

  if (arrow.classList.contains("bx-x")) {
    portLayer.style.transform = "translateY(0%)";
  } else {
    portLayer.style.transform = "translateY(100%)";
  }
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon navbar whem click nsvbsr link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};