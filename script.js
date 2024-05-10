// Window width
let widthInputBox = document.getElementById("width-input");
let heightInputBox = document.getElementById("height-input");

widthInputBox.addEventListener("change", changeSize);
heightInputBox.addEventListener("change", changeSize);

//Changing size function
function changeSize() {
  //Input
  let widthSize1 = +widthInputBox.value;
  let heightSize1 = +heightInputBox.value;

  //Validating numbers
  if (widthInputBox > 400 && heightInputBox > 200) {
    widthInputBox = 400;
    heightInputBox = 200;
  } else if (widthInputBox < 50 && heightInputBox < 50) {
    widthInputBox = 50;
    heightInputBox = 50;
  }
  //Process
  document.getElementById("display").style.height = `${heightSize1}px`;
  document.getElementById("display").style.width = `${widthSize1}px`;
}

// RGB Colors

//Variables to save names
let redInEl = document.getElementById("redBG");
let greenInEl = document.getElementById("greenBG");
let blueInEl = document.getElementById("blueBG");
let rgbStringOutEl = document.getElementById("rgbText1");
let displayEl = document.getElementById("display");

//ColorButton
redInEl.addEventListener("input", colorBtn);
greenInEl.addEventListener("input", colorBtn);
blueInEl.addEventListener("input", colorBtn);

function colorBtn() {
  //Input
  let red = +redInEl.value;
  let green = +greenInEl.value;
  let blue = +blueInEl.value;

  //Validate colors (Constrain colors between 0 - 255)
  if (red < 0) {
    red = 0;
    redInEl.value = 0;
  } else if (red > 255) {
    red = 255;
    redInEl.value = 255;
  }

  if (green < 0) {
    green = 0;
    greenInEl.value = 0;
  } else if (green > 255) {
    green = 255;
    greenInEl.value = 255;
  }

  if (blue < 0) {
    blue = 0;
    blueInEl.value = 0;
  } else if (blue > 255) {
    blue = 255;
    blueInEl.value = 255;
  }

  //Process
  let coloring = `RGB(${red},${green},${blue})`;
  //Output
  rgbStringOutEl.innerHTML = coloring;
  displayEl.style.backgroundColor = coloring;
}
