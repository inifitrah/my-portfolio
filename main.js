const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const imgAbout = document.querySelector(".about img");
const portLayer = document.querySelectorAll(".portfolio-layer");
const arrows = document.querySelectorAll(".arrows");
const image = document.getElementById("myLogoImage");
const modes = document.getElementById("modes");
const systemDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const containerModal = document.querySelector(".container-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-modal");
const openModal = (callback) => {
  containerModal.classList.remove("hidden");
  callback()
};
const closeModal = () => {
  containerModal.classList.add("hidden");
};
// onload = openModal;
onload = setTimeout(() => {
   openModal()
}, 4000)
// modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-modal")) closeModal();
  if (e.target.classList.contains("overlay")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !containerModal.classList.contains("hidden"))
    closeModal();
});
// modal akhir

// mode page
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-moon")) {
    e.target.classList.toggle("bxs-sun");
    document.body.classList.toggle("active-mode");
    function toggleImage() {
      if (image.src.includes("img/logo/trahdark.png")) {
        image.src = "img/logo/trah.png";
      } else {
        image.src = "img/logo/trahdark.png";
      }
    }
    toggleImage();
  }
  // last
  // nav menu
  if (e.target.classList.contains("bx-menu")) {
    e.target.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  }
});

// arrow di portfbox
arrows.forEach((arr, index) => {
  arr.addEventListener("mouseenter", () => {
    arr.classList.add("bx-x");
    portLayer[index].classList.add("translated");
  });

  arr.addEventListener("click", () => {
    arr.classList.toggle("bx-x");
    portLayer[index].classList.toggle("translated");
  });
});
// last

//
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // delete th transform
  portLayer.forEach((element) => {
    element.classList.remove("translated");
  });
  arrows.forEach((arr) => {
    arr.classList.remove("bx-x");
  });

  // sticky navbar
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon navbar whem click navbaer
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// // library
// // typing
const typing = new Typed(".typingjs", {
  strings: ["Web Developer", "FullStack JS"],
  typeSpeed: 100,
  cursorChar: "|",
});

//  scroll reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
ScrollReveal().reveal(".about-content h3", { origin: "left" });
ScrollReveal().reveal(".about .about-img", { origin: "bottom" });
ScrollReveal().reveal(".skills-box, .portfolio-box", { origin: "bottom" });
