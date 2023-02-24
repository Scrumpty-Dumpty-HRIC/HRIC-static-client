const choices = document.querySelectorAll("select");
const answered = new Set();
const submit = document.querySelectorAll("form button[type=submit]");

const progressBar = document.querySelector("progress");
var progress = 0;

function updateProgress() {
  choices.forEach((c) => {
    c.addEventListener("change", () => {
      if (c.value == "") {
        answered.delete(c);
        progress = answered.size /= 1;
      } else {
        answered.add(c);
        progress = answered.size *= 1;
      }
      progressBar.setAttribute("value", progress);
    });
  });
}

function validateOnChange() {
  choices.forEach((c) => {
    c.addEventListener("change", () => {
      if (c.value == "") {
        c.setAttribute("aria-invalid", "true");
      } else {
        c.removeAttribute("aria-invalid");
      }
    });
  });
}

function validateOnSubmit() {
  choices.forEach((c) => {
    submit.forEach((s) => {
      s.addEventListener("click", () => {
        if (c.value == "") {
          c.setAttribute("aria-invalid", "true");
        } else {
          // execute program
        }
      });
    });
  });
}

validateOnChange();
validateOnSubmit();
updateProgress();
