"use strict";
const form_card = document.getElementById("demo");
const result_card = document.getElementById("result_card");
function getValue() {
  const selected = document.querySelector('input[name="rate"]:checked').value;
  const result = document.getElementById("result");

  form_card.style.display = "none";
  result.innerHTML = selected;
  result_card.style.display = "block";
}

function resetStyle() {
  form_card.style.display = "block";
  result_card.style.display = "none";
}
