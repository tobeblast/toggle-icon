const closeIconEl = document.getElementById("closeIcon");
const openIconEl = document.getElementById("openIcon");
const sideNav = document.getElementById("sideNav");

openIconEl.addEventListener("click", function () {
  sideNav.classList.add("side-nav-open");
});

closeIconEl.addEventListener("click", function () {
  sideNav.classList.remove("side-nav-open");
});
