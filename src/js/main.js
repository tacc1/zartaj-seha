const routes = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/products.html" },
  { label: "About", route: "/about.html" },
  { label: "Contact", route: "/contact.html" },
  // { label: "🔍", route: "/search.html" },
];

const listItem = (label, path) => {
  const liElement = document.createElement("li");
  console.log(window.location.pathname, path);
  if (window.location.pathname === path) {
    liElement.className = "menu-item active";
  } else {
    liElement.className = "menu-item";
  }
  liElement.innerHTML = `<a href=${path}>${label}</a>`;
  return liElement;
};

const menuList = document.querySelector("ul.menu-list");

if (menuList) {
  routes.forEach((item) => {
    menuList.appendChild(listItem(item.label, item.route));
  });
}

// * navbar dropdown
const onNavbarClickHandler = () => {
  console.log("navbar click handler working!");
};
