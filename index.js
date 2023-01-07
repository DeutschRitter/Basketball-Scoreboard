let counterLeftEl = document.getElementById("counter-left-el");
let counterRightEl = document.getElementById("counter-right-el");

let boxLeft = document.getElementById("box-left");
let boxRight = document.getElementById("box-right");

let btnReset = document.getElementById("btn-reset");

let counterLeft = 0;
let counterRight = 0;

counterLeftEl.innerHTML = counterLeft;
counterRightEl.innerHTML = counterRight;

function add1Left() {
  counterLeft += 1;
  counterLeftEl.innerHTML = counterLeft;
}

function add2Left() {
  counterLeft += 2;
  counterLeftEl.innerHTML = counterLeft;
}

function add3Left() {
  counterLeft += 3;
  counterLeftEl.innerHTML = counterLeft;
}

function add1Right() {
  counterRight += 1;
  counterRightEl.innerHTML = counterRight;
}

function add2Right() {
  counterRight += 2;
  counterRightEl.innerHTML = counterRight;
}

function add3Right() {
  counterRight += 3;
  counterRightEl.innerHTML = counterRight;
}

function resetGame() {
  counterLeft = 0;
  counterRight = 0;
  counterLeftEl.innerHTML = counterLeft;
  counterRightEl.innerHTML = counterRight;
  boxRight.classList.remove("counter-highlight");
  boxLeft.classList.remove("counter-highlight");
}

function highlight() {
  if (counterLeft > counterRight) {
    boxLeft.classList.add("counter-highlight");
    boxRight.classList.remove("counter-highlight");
  }
  if (counterRight > counterLeft) {
    boxLeft.classList.remove("counter-highlight");
    boxRight.classList.add("counter-highlight");
  }
  if (counterRight == counterLeft) {
    boxRight.classList.remove("counter-highlight");
    boxLeft.classList.remove("counter-highlight");
  }
}
