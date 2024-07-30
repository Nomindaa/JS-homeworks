let theme = "light";

const themeButton = document.getElementById("logo-circle");

function main() {
  if (theme === "light") {
    theme = "dark";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "dark.css");
  } else {
    theme = "light";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "light.css");
  }
}

themeButton.addEventListener("click", main);
