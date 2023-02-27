import { calculateRisk, calculateBMI } from "./calculations.js";

const form = document.querySelector("form");
const answered = new Set();
const riskBtn = document.getElementById("riskBtn");
const bmiBtn = document.getElementById("bmiBtn");
const clearBtn = document.getElementById("clearBtn");

// validate entries on change
form.addEventListener("change", (e) => {
  if (e.target.tagName === "SELECT") {
    e.target.value == ""
      ? e.target.setAttribute("aria-invalid", "true")
      : e.target.removeAttribute("aria-invalid");
  }
});

function validateform() {
  answered.size == 7
    ? true
    : console.error("Form Invalid. Please answer all entries.");
}

riskBtn.addEventListener("click", () => {
  if (validateform()) {
    calculateRisk();
  }
});

bmiBtn.addEventListener("click", () => {
  if (validateform()) {
    calculateBMI();
  }
});
