// see-more button

const seeMoreBtn = document.getElementById("see-more");
const hideDiv = document.getElementById("hide-content");

seeMoreBtn.addEventListener("click", () => {
  hideDiv.classList.toggle("show");

  if (hideDiv.classList.contains("show")) {
    seeMoreBtn.innerHTML = "Ver menos";
    seeMoreBtn.style.backgroundColor = "#fcbf49";
  } else {
    seeMoreBtn.innerHTML = "Ver mais";
    seeMoreBtn.style.backgroundColor = "#91e0f2";
  }
});

// dark mode

const input = document.getElementById("checkbox");

input.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark-mode");
});

// copy button

const copyIcon = document.querySelector(".copy-icon");
const inputText = document.querySelector(".input-text");
const popup = document.getElementById("popup");

copyIcon.addEventListener("click", function () {
  navigator.clipboard.writeText(inputText.value);
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 1500);
});

//3d effect

VanillaTilt.init(document.querySelector(".js-tilt"), {
  max: 5,
  speed: 75,
});

VanillaTilt.init(document.querySelectorAll(".js-tilt"));


// menu hamburger

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});