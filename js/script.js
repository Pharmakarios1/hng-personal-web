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

// Curent time and Date in UTC
const timeDate = document.querySelector("#current-time-date");

// Function to update the current date and time in UTC
function updateDateTime() {
  const date = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  const currentDateTime = `${dayOfWeek}, ${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
  // Update the date and time in the HTML element
  timeDate.innerText = currentDateTime;
}

// Update the date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Animation

document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.getElementById("typed-text");
  const textArray = ["A Front-end developer", "A Pharmacist"];
  let textArrayIndex = 0,
    charIndex = 0;

  const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(
        charIndex++
      );
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        --charIndex
      );
      setTimeout(erase, 50);
    } else {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      setTimeout(type, 1100);
    }
  };

  type();
});
