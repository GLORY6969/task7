var x = document.getElementById("btn");
x.addEventListener("click", function () {
  window.scroll({
    top: 660,
    left: 0,
    behavior: "smooth",
  });
});

const toggle = document.getElementsByClassName("toggle");
[0];
const nav = document.getElementById("nav");
[0];
toggle.addEventListener("click", function () {
  nav.classlist.toggle("active");
});
