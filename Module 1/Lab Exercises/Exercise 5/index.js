let PrettyColours = ["red", "green", "blue", "yellow", "purple"];
let AmazingAnimals = ["Dog", "Cat", "Rabbit", "Horse", "Elephant"];

function ReplaceElements() {
  PrettyColours[0] = "BrightRed";
  PrettyColours[3] = "DarkYellow";
}

function AddElement() {
  PrettyColours.unshift("orange");
}

function RemoveElement() {
  PrettyColours.pop();
}

function DisplayColours() {
  console.log(PrettyColours);
}

ReplaceElements();
AddElement();
RemoveElement();
DisplayColours();

function AddAnimalElement() {
  AmazingAnimals.push("Lion");
}

function ArrayCount(array) {
  return array.length;
}

function CreateArray(a, b) {
  let NewArray = [a, b];
  return NewArray;
}

AddAnimalElement();
console.log(ArrayCount(AmazingAnimals));
console.log(CreateArray("Hello", "World"));
console.log(AmazingAnimals);
