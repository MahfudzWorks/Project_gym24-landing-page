const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

const fadeInElements = document.querySelectorAll(
  ".fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom, .fade-in-center"
);
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
fadeInElements.forEach((element) => observer.observe(element));

let currentIndex = 0;
const items = document.querySelectorAll(".slider-item");
const totalItems = items.length;

function moveToNextSlide() {
  if(totalItems === 0) return;
  currentIndex = (currentIndex + 1) % totalItems;
  const slider = document.querySelector(".slider");
  if(slider) {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}
setInterval(moveToNextSlide, 3000);