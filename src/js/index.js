const scrollBtn = document.querySelector("#scrollBtn");
const navBar = document.querySelector("#navBar");
const aboutSection = document.querySelector("#about");
const portfolioSection = document.querySelector("#portfolio");
const testimonySection = document.querySelector("#testimony");
const contactSection = document.querySelector("#contact");
const closeModal = document.querySelector("#closeModal img");
const navModal = document.querySelector("#navModal");
const openModal = document.querySelector("#hbIcon");

const showScroll = "showScroll";
const navScroll = "navScroll";
const showSection = "showSection";

/* --------------  TOGGLE SHOW SCROLL FUNCTION ----------------  */
function scrollHandler(tagElement, classElement, height) {
  if (window.scrollY >= height) {
    tagElement.classList.add(classElement);
  } else {
    tagElement.classList.remove(classElement);
  }
}

/* --------------  SCROLL UP BUTTON ----------------  */
window.addEventListener("scroll", () => {
  scrollHandler(scrollBtn, showScroll, 100);
});

/* --------------  CHANGE NAVBAR STYLE ----------------  */
window.addEventListener("scroll", () => {
  scrollHandler(navBar, navScroll, 100);
});

// /* --------------  SHOW ABOUT SECTION WHEN SCROLL UP ----------------  */
window.addEventListener("scroll", () => {
  scrollHandler(aboutSection, showSection, 100);
});

// /* --------------  SHOW PORTFOLIO SECTION WHEN SCROLL UP ----------------  */
window.addEventListener("scroll", () => {
  scrollHandler(portfolioSection, showSection, 700);
});

// /* --------------  SHOW TESTIMONY SECTION WHEN SCROLL UP ----------------  */
window.addEventListener("scroll", () => {
  scrollHandler(testimonySection, showSection, 1350);
});

// /* --------------  SHOW TESTIMONY SECTION WHEN SCROLL UP ----------------  */
window.addEventListener("scroll", () => {
  scrollHandler(contactSection, showSection, 1600);
});

/* --------------  OPEN HAMBURGUER MODAL ----------------  */
openModal.addEventListener("click", () => {
  navModal.style.display = "flex";
});

/* --------------  CLOSE HAMBURGUER MODAL ----------------  */
closeModal.addEventListener("click", () => {
  navModal.style.display = "none";
});
