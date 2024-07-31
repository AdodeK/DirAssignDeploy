"use strict";
const firstDiv = document.getElementById("main11");
const secondDiv = document.getElementById("main22");
const thirdDiv = document.getElementById("main33");
const commonSubmet = document.querySelector(".submet");
const commonSubmeet = document.querySelector(".submeet");
const commonSubmeeet = document.querySelector(".submeeet");

let count = 0;
const nextPage = function () {
  count += 1;
  if (count === 1) {
    firstDiv.style.display = "block";
    secondDiv.style.display = "none";
    thirdDiv.style.display = "none";
    commonSubmet.textContent = "Continue";
    commonSubmeet.textContent = "none";
    commonSubmeeet.textContent = "none";
  } else if (count === 2) {
    firstDiv.style.display = "none";
    secondDiv.style.display = "block";
    thirdDiv.style.display = "none";
    commonSubmet.textContent = "none";
    commonSubmeet.textContent = "Continue";
    commonSubmeeet.textContent = "none";
  } else if (count === 3) {
    firstDiv.style.display = "none";
    secondDiv.style.display = "none";
    thirdDiv.style.display = "block";
    commonSubmet.textContent = "none";
    commonSubmeet.textContent = "none";
    commonSubmeeet.textContent = "Submit";
  } else if (count >= 4) {
    count = 3;
  }
  console.log(count);
};
nextPage();

const goBack = function () {
  count -= 1;

  if (count === 1) {
    firstDiv.style.display = "block";
    secondDiv.style.display = "none";
    thirdDiv.style.display = "none";
    commonSubmet.textContent = "Continue";
    commonSubmeet.textContent = "none";
    commonSubmeeet.textContent = "none";
  } else if (count === 2) {
    firstDiv.style.display = "none";
    secondDiv.style.display = "block";
    thirdDiv.style.display = "none";
    commonSubmet.textContent = "none";
    commonSubmeet.textContent = "Continue";
    commonSubmeeet.textContent = "none";
  } else if (count === 3) {
    firstDiv.style.display = "none";
    secondDiv.style.display = "none";
    thirdDiv.style.display = "block";
    commonSubmet.textContent = "none";
    commonSubmeet.textContent = "none";
    commonSubmeeet.textContent = "Submit";
  }
};
