var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
  //mode buttons
  setupModes();
  //squares
  setupSquares();
  //reset
  reset();
}

function setupModes() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      modeBtn[2].classList.remove("selected");
      this.classList.add("selected");
      // this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else if (this.textContent === "Medium") {
        numSquares = 6;
      } else {
        numSquares = 9;
      }
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        messageDisplay.style.color = "#229954";
        resetBtn.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColor;
        changeColor(clickedColor);
      } else {
        this.style.backgroundColor = "#17202a";
        messageDisplay.textContent = "Try Again!";
        messageDisplay.style.color = "#E74C3C";
      }
    });
  }
}

function reset() {
  //generate random colors
  colors = generateRandomColor(numSquares);
  //pick new colors from the array
  pickedColor = pickColor();
  //change the display text
  messageDisplay.textContent = "";
  resetBtn.textContent = "New Colors!";
  colorDisplay.textContent = pickedColor;
  //change the display colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "#2980B9";
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  //create an array
  var arr = [];
  // repeat the array
  for (var i = 0; i < num; i++) {
    // get random color and push into the array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //red
  var r = Math.floor(Math.random() * 256);
  // green
  var g = Math.floor(Math.random() * 256);
  // blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetBtn.addEventListener("click", function () {
  reset();
});
