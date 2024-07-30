const themeButton = document.getElementById("change-theme-button");

function main() {
  console.log(themeButton.innerHTML);

  if (themeButton.innerHTML === "Light theme") {
    themeButton.innerHTML = "Dark theme";
    const link = document.getElementById("theme");
    link.setAttribute("href", "light.css");
  } else {
    themeButton.innerHTML = "Light theme";
    const link = document.getElementById("theme");
    link.setAttribute("href", "dark.css");
  }
}

// function changeTheme() {
//   const body = document.getElementsByTagName("body")[0];

//   if (theme === "light") {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//   } else {
//     body.style.borderBlockColor = "black";
//     body.style.color = "white";
//   }
// }

// function changeText() {
//   const title = document.getElementById("title");

//   if (theme == "light") {
//     Text.innerHTML = "Dark theme";
//     theme = "dark ";
//   } else {
//     Text.innerHTML = "lightTheme";
//     theme = "light";
//   }
// }

// function main() {
//   changeText();
//   changeTheme();
// }

themeButton.addEventListener("click", main);
