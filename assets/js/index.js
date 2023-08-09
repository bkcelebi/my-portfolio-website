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

const popUp = () => {
  const shortcuts = document.querySelector(".shortcuts");
  const sidebarIcons = document.querySelector(".sidebarIcons");
  const sidebarLinks = document.querySelector(".sidebarLinks");

  sidebarLinks.style.left = "0";
  sidebarLinks.style.padding = "0";
  shortcuts.style.display = "none";
  sidebarIcons.style.display = "flex";
};

const collapse = () => {
  const shortcuts = document.querySelector(".shortcuts");
  const sidebarIcons = document.querySelector(".sidebarIcons");
  const sidebarLinks = document.querySelector(".sidebarLinks");

  shortcuts.style.display = "block";
  sidebarIcons.style.display = "none";
  sidebarLinks.style.left = "0";
  sidebarLinks.style.padding = "1rem 0.5rem";
};

const body = document.querySelector("body");
body.addEventListener("touchstart", (e) => {
  collapse();
});

const share = () => {
  if (navigator.share) {
    navigator.share({
      text: "Burak KAMILCELEBI Portfolio Website",
      url: "https://bkcelebi.github.io/portfolio/",
      title: "Burak Kamilcelebi | KC_DEV | Software Development Graduate",
    });
  } else {
    navigator.clipboard.writeText("https://bkcelebi.github.io/portfolio/");
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
