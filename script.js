const menuButton = document.querySelector("#home button");
const menuSection = document.querySelector("#menu");

menuButton.addEventListener("click", function () {
  menuSection.scrollIntoView({ behavior: "smooth" });
});