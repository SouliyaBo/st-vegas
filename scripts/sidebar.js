const hamburgerElement = document.querySelector(".hamburger");

hamburgerElement.addEventListener("click", () => {
  //document.body.classList.toggle("sidebar-open");

  const sideBarElement = document.querySelector(".sidebar-container");
  sideBarElement.setAttribute("style", "display: flex;");

  const sideBar = document.querySelector(".sidebar");
  sideBar.setAttribute("style", "animation: slideInFromLeft 0.5s ease-in-out;");
});

const sideBarBgElement = document.querySelector(
  ".sidebar-container-background"
);
sideBarBgElement.addEventListener("click", () => {
  const sideBar = document.querySelector(".sidebar");
  sideBar.setAttribute("style", "animation: slideInToLeft 0.5s ease-in-out;");

  setTimeout(() => {
    const sideBarElement = document.querySelector(".sidebar-container");
    sideBarElement.setAttribute("style", "display: none;");
  }, 500);
});
