import { PaySystem } from "./DetectCardType";
import { luhnAlgorithm } from "./Validator";

document.querySelector("input").addEventListener("change", PaySystem());

document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const cardNumber = document.querySelector(".input-text").value;

  if (luhnAlgorithm(cardNumber)) {
    console.log(luhnAlgorithm(cardNumber));
    alert("Номер карты верен");
  } else {
    alert("Номер карты не верен. Попробуйте ввести другой номер карты.");
  }
});
