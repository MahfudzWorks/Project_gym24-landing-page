// Humberger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Animasi fade
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
  {
    threshold: 0.1,
  }
);

fadeInElements.forEach((element) => observer.observe(element));

// Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Slidder
let currentIndex = 0;
const items = document.querySelectorAll(".slider-item");
const totalItems = items.length;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 3000);
