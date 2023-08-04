"use strict";

const toggle = () => {
  const burgerMenu = document.querySelector(".nav");
  const burgerIcon = document.querySelector("#burgerIcon");
  const xIcon = document.querySelector("#xIcon");
  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
    xIcon.style.display = "none";
    burgerIcon.style.display = "block";
  } else {
    burgerMenu.style.display = "block";
    xIcon.style.display = "block";
    burgerIcon.style.display = "none";
  }
};
