// Part 2: Functions with parameters, return values, and scope

let box = document.getElementById("box");
let position = 0; // global scope variable

// Move the box (parameter + scope demonstration)
function moveBox(distance) {
  position += distance; // local variable modifies global state
  box.style.transform = `translateX(${position}px)`;
  return position; // returns new position
}

// Reset the box
function resetBox() {
  position = 0;
  box.style.transform = `translateX(0px)`;
  return position;
}

// Part 3: Modal control with JS + CSS animations
let modal = document.getElementById("modal");
let openBtn = document.getElementById("openModal");
let closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // hide modal
});

// Close modal if user clicks outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
