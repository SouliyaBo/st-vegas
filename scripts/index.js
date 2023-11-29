const banner = document.querySelector("#banner");

banner.addEventListener("click", () => {
  //   resfresh page
  location.reload();
});

// Mobile
const loginBtnMobile = document.querySelector("#loginBtn-mobile");

loginBtnMobile.addEventListener("click", () => {
  location.href = "./pages/login-page-mobile.html";
});

const resgisterBtnMobile = document.querySelector("#registerBtn-mobile");

resgisterBtnMobile.addEventListener("click", () => {
  location.href = "./pages/register-step1.html";
});
