let animateLeft = document.querySelectorAll(".animate-left");

function showLeft() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateLeft.length; i++) {
    let high = animateLeft[i].offsetTop;
    if (high - 500 < scrollTop) {
      animateLeft[i].style.opacity = 1;
      animateLeft[i].classList.add("animate__fadeInLeftBig");
    }
  }
}
window.addEventListener("scroll", showLeft);

let animateRight = document.querySelectorAll(".animate-right");

function showRight() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateRight.length; i++) {
    let high = animateRight[i].offsetTop;
    if (high - 500 < scrollTop) {
      animateRight[i].style.opacity = 1;
      animateRight[i].classList.add("animate__jackInTheBox");
    }
  }
}

window.addEventListener("scroll", showRight);
// animate content
let animateRightContent = document.querySelectorAll(".animate-right-content");
function showRightContent() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateRightContent.length; i++) {
    let high = animateRightContent[i].offsetTop;
    if (high - 150 < scrollTop) {
      animateRightContent[i].style.opacity = 1;
      animateRightContent[i].classList.add("animate__fadeInRight");
    }
  }
}

window.addEventListener("scroll", showRightContent);
// Animate-image
let animateImage = document.querySelectorAll(".animate-image");

function showImage() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateImage.length; i++) {
    let high = animateImage[i].offsetTop;
    if (high - 400 < scrollTop) {
      animateImage[i].style.opacity = 1;
      animateImage[i].classList.add("appear-image");
    }
  }
}

window.addEventListener("scroll", showImage);
// animate-card
let animateCard = document.querySelectorAll(".animate-card");

function showCard() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateCard.length; i++) {
    let high = animateCard[i].offsetTop;
    if (high - 500 < scrollTop) {
      animateCard[i].style.opacity = 1;
      animateCard[i].classList.add("animate__pulse");
    }
  }
}

window.addEventListener("scroll", showCard);

// -------------------------------AUDIO
const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

function abrir() {
  document.getElementById("sobre-arriba").classList.add("animate__fadeOutUp");
  document.getElementById("sobre-abajo").classList.add("animate__slideOutDown");
  document.getElementById("btn-open").classList.remove("animate__infinite");
  document.getElementById("btn-open").classList.add("animate__fadeOut");
  audio.play();
  setTimeout(function () {
    document.getElementById("hoja-principal").classList.add("hide");
    document.getElementById("fondo").classList.remove("hide");
    document.getElementById("nombre").classList.add("animate__zoomIn");
    document.getElementById("play").classList.remove("hide");
  }, 1300);
}
