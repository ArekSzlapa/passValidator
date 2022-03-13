"use strict";

const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 5;

const validator = () => {
  if (
    pass.value.length >= minValue &&
    pass.value.match(numbers) &&
    pass.value.match(special) &&
    pass.value.match(letters)
  ) {
    p.textContent = "Masz świetne hasło!";
    p.style.color = "green";
  } else if (
    pass.value.length >= minValue &&
    pass.value.match(numbers) &&
    pass.value.match(letters)
  ) {
    p.textContent = "Masz średnie hasło, użyj znaków specjalnych!";
    p.style.color = "yellow";
  } else if (pass.value.length <= minValue) {
    p.style.color = "red";
    p.textContent = "Masz słabe hasło, użyj cyfr i znaków specjalnych!";
  }
};

const emptyPass = () => {
  if (pass.value.length === 0) {
    p.textContent = "Nie podałeś hasła...";
    p.style.color = "";
  } else {
    validator();
  }
};

pass.addEventListener("keyup", emptyPass);
