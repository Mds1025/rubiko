let showClass = false;
let goUp = document.getElementById("goUp");
let menuButton = document.getElementById("menuBtn");
let aside = document.getElementById("aside");
let exitBtn = document.getElementById("exitBtn");

document.addEventListener("scroll", function (e) {
  if (window.scrollY > window.innerHeight / 2) {
    if (!showClass) {
      showClass = true;
      goUp.classList.remove("hidden");
    }
  } else {
    if (showClass) {
      showClass = false;
      goUp.classList.add("hidden");
    }
  }
});

goUp.addEventListener("click", function (e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menuButton.addEventListener("click", function (e) {
  if (!aside.classList.contains("hidden")) {
    aside.classList.add("hidden");
  }
});

menuButton.addEventListener("click", function (e) {
  aside.classList.remove("hidden");
});

exitBtn.addEventListener("click", function (e) {
  aside.classList.add("hidden");
});
