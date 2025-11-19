const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function darkmode() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", darkmode);
