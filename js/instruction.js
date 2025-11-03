document.querySelector("#aarhus").addEventListener("click", changetext);

function changetext() {
  document.querySelector(".show").classList.remove("show");
  document.querySelector(".aarhus-text").classList.add("show");
}

document.querySelector("#langeland").addEventListener("click", changetext1);

function changetext1() {
  document.querySelector(".show").classList.remove("show");
  document.querySelector(".langeland-text").classList.add("show");
}

document.querySelector("#kbh").addEventListener("click", changetext2);

function changetext2() {
  //   hideall();
  document.querySelector(".show").classList.remove("show");
  document.querySelector(".kbh-text").classList.add("show");
}

// function hideall() {
//   const allinfo = document.querySelectorAll(".info-text");
//   for (const info of allinfo) {
//     info.classList.add("hide");
//   }
// }
