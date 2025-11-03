document.querySelector("#aarhus").addEventListener("click", changetext);

function changetext() {
  console.log("hejsa jeg virker");
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
  document.querySelector(".show").classList.remove("show");
  document.querySelector(".kbh-text").classList.add("show");
}
