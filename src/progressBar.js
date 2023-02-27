const form = document.querySelector("form");
const answered = new Set();
const progressBar = document.querySelector("progress");

// dynamically update progress bar
form.addEventListener("change", (e) => {
  if (e.target.tagName === "SELECT") {
    e.target.value == "" ? answered.delete(e.target) : answered.add(e.target);
    progressBar.value = answered.size;
  }
});
