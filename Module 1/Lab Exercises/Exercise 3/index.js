const colours = ["red", "green", "blue", "yellow", "purple", "orange"];

function Column1() {
  let NewColour = colours[Math.floor(Math.random() * colours.length)]; // generate your colour
  document.getElementById("column1").style.backgroundColor = NewColour; // apply the colour
  document.getElementById("heading1").textContent =
    "Hello World! Colour is " + NewColour; // text here with the colour name
}

function Column2() {
  let NewColour = colours[Math.floor(Math.random() * colours.length)];
  document.getElementById("column2").style.backgroundColor = NewColour;
  document.getElementById("heading2").textContent =
    "Hello World! Colour is " + NewColour;
}
