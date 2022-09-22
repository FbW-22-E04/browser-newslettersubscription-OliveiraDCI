"use strict";

const bg = document.querySelector(".bg");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const closeButton = document.querySelector(".closeButton");

document.documentElement.addEventListener("mousemove", function popUp(e) {
  if (e.clientY < 10) {
    bg.classList.remove("off");
    e.currentTarget.removeEventListener("mousemove", popUp);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bg.classList.add("off");
  alert(`Thank you. Your email ${form.email.value} is now subscribed`);
});

closeButton.addEventListener("click", (e) => {
  bg.classList.add("off");
});
