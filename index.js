// Horizontal scrolling with mouse wheel

const imageContainer = document.querySelector(".image__container");

if (imageContainer) {
  document.addEventListener("wheel", (e) => {
    e.preventDefault();
    imageContainer.scrollLeft += e.deltaY;
  });
}

// Theme switch

const preferredMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : preferredMode;

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
