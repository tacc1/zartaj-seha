// * navbar dropdown
const onNavbarClickHandler = () => {
  const mobileNav = document.querySelector("div.mobile-nav");
  const dropdownBtn = document.querySelector("button.nav-menu-btn");
  mobileNav.classList.toggle("active");
  dropdownBtn.classList.toggle("active");
};
