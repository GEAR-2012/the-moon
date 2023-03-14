const mainNavbar = document.querySelector("#main-navbar");
const brandLogoContainer = document.querySelector('#brand-logo-container')
const copyrightYearHolder = document.querySelector('#copyright-year');

copyrightYearHolder.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  const posY = this.scrollY;

  if (posY > 10) {
    mainNavbar.classList.add("shrink-navbar", 'small-navbar');
    brandLogoContainer.classList.add("shrink-logo");
  } else {
    mainNavbar.classList.remove("shrink-navbar", 'small-navbar');
    brandLogoContainer.classList.remove("shrink-logo");
  }
});
