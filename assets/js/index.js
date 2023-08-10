"use strict";

//burger menu
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

//shortcut links
const popUp = () => {
  const shortcuts = document.querySelector(".shortcuts");
  const sidebarIcons = document.querySelector(".sidebarIcons");
  const sidebarHandle = document.querySelector(".sidebarHandle");

  sidebarHandle.style.left = "0";
  sidebarHandle.style.padding = "0";
  shortcuts.style.display = "none";
  sidebarIcons.style.display = "flex";
};

const collapse = () => {
  const shortcuts = document.querySelector(".shortcuts");
  const sidebarIcons = document.querySelector(".sidebarIcons");
  const sidebarHandle = document.querySelector(".sidebarHandle");

  shortcuts.style.display = "block";
  sidebarIcons.style.display = "none";
  sidebarHandle.style.left = "0";
  sidebarHandle.style.padding = "1rem 0.5rem";
};

const body = document.querySelector("body");
body.addEventListener("click", () => {
  collapse();
});

//share
if (!navigator.share) {
  const clipboardIcon = document.querySelector("#clipboardIcon");
  const shareIcon = document.querySelector("#shareIcon");
  clipboardIcon.style.display = "block";
  clipboardIcon.style.paddingTop = ".9rem";
  clipboardIcon.style.paddingBottom = ".7rem";
  shareIcon.style.display = "none";
}

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

//scroll up
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

//Clipboard
const cvCopy = document.querySelector(".cvCopy");
const badgesCopy = document.querySelector(".badgesCopy");
const mailCopy = document.querySelector(".mailCopy");
const linkedinCopy = document.querySelector(".linkedinCopy");
const githubCopy = document.querySelector(".githubCopy");

cvCopy.addEventListener("click", () => {
  const invisible = document.querySelector("#invisibleCV");
  const visible = document.querySelector("#visibleCV");

  visible.style.display = "none";
  invisible.style.display = "inline";

  setTimeout(() => {
    invisible.style.display = "none";
    visible.style.display = "inline";
  }, 1000);

  navigator.clipboard.writeText(
    "https://drive.google.com/file/d/1p1C_IXYXidmjBetOQKUpuoFktetc76rw/view?usp=sharing"
  );
});

badgesCopy.addEventListener("click", () => {
  const invisible = document.querySelector("#invisibleBadge");
  const visible = document.querySelector("#visibleBadge");

  visible.style.display = "none";
  invisible.style.display = "inline";

  setTimeout(() => {
    visible.style.display = "inline";
    invisible.style.display = "none";
  }, 1000);

  navigator.clipboard.writeText(
    "https://www.credly.com/users/burak-kamilcelebi/badges"
  );
});

mailCopy.addEventListener("click", () => {
  const invisible = document.querySelector("#invisibleMail");
  const visible = document.querySelector("#visibleMail");

  visible.style.display = "none";
  invisible.style.display = "inline";

  setTimeout(() => {
    visible.style.display = "inline";
    invisible.style.display = "none";
  }, 1000);

  navigator.clipboard.writeText("burakkamilcelebi@gmail.com");
});

linkedinCopy.addEventListener("click", () => {
  const invisible = document.querySelector("#invisibleLinkedin");
  const visible = document.querySelector("#visibleLinkedin");

  visible.style.display = "none";
  invisible.style.display = "inline";

  setTimeout(() => {
    visible.style.display = "inline";
    invisible.style.display = "none";
  }, 1000);

  navigator.clipboard.writeText(
    "https://www.linkedin.com/in/burak-kamilcelebi/"
  );
});

githubCopy.addEventListener("click", () => {
  const invisible = document.querySelector("#invisibleGithub");
  const visible = document.querySelector("#visibleGithub");

  visible.style.display = "none";
  invisible.style.display = "inline";

  setTimeout(() => {
    visible.style.display = "inline";
    invisible.style.display = "none";
  }, 1000);

  navigator.clipboard.writeText("https://github.com/bkcelebi");
});
