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

const calcScrollValue = () => {
  let scrollProgress = document.querySelector(".progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 120) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#7843e9 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
