const slider = document.querySelector(".pill-slider");
const cvBtn = document.getElementById("cvBtn");
const hireBtn = document.getElementById("hireBtn");

function moveSlider(targetBtn) {
  const parent = targetBtn.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const btnRect = targetBtn.getBoundingClientRect();
  const paddingLeft = parseFloat(getComputedStyle(parent).paddingLeft);

  slider.style.width = btnRect.width + "px";
  slider.style.transform = `translateX(${
    btnRect.left - parentRect.left - paddingLeft
  }px)`;
}

// initial position
window.addEventListener("load", () => moveSlider(cvBtn));

cvBtn.addEventListener("click", (e) => {
  moveSlider(cvBtn);
  cvBtn.classList.add("active");
  hireBtn.classList.remove("active");
});

hireBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // move pill instantly
  moveSlider(hireBtn);
  hireBtn.classList.add("active");
  cvBtn.classList.remove("active");

  window.location.href = "mailto:mehraniraj194@gmail.com";
});

AOS.init({
  duration: 1000, // animation duration
  easing: "ease-in-out",
  once: false,
  mirror: true,
  offset: 120, // trigger distance
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-center");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // animates hamburger
  navMenu.classList.toggle("active"); // shows/hides menu
});

// Optional: close menu when a link is clicked
document.querySelectorAll(".nav-center .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
