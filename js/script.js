// SIDE BAR

// select bars
const squareBar = document.querySelector(".side-menu");
const close = document.querySelector(".fa-close");
// select nav-menu
const sideMenu = document.querySelector(".side-menu-container");

const toggleSideMenu = () => {
  sideMenu.classList.toggle("active");

  // Close the side menu when clicking outside the menu
  // document.addEventListener("click", (event) => {
  //   if (!sideMenu.contains(event.target)) {
  //     sideMenu.classList.remove("active");
  //   }
  // });
};
// Add Event Listeners
squareBar.addEventListener("click", toggleSideMenu);

// Add Event Listeners
// Run the function to hide and open using toggle
// remove class active.
close.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// MOBILE NAVIGATION BAR
const navBar = document.querySelector(".mobile-menu");
console.log(navBar);
const navMenu = document.querySelector("nav");
console.log(navMenu);

const toggleMobileMenu = () => {
  navMenu.classList.toggle("active-menu");
};

navBar.addEventListener("click", toggleMobileMenu);
