const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", () => {
  const loginModal = document.querySelector(".login-modal");
  loginModal.setAttribute("style", "display: flex;");

  loginModal.childNodes[3].addEventListener("click", () => {
    loginModal.setAttribute("style", "display: none;");
  });
});
