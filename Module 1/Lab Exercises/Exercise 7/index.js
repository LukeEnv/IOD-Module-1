function Plus(a, b) {
  // Add 2 numbers together and return the result
  return a + b;
}

function Minus(a, b) {
  // Subtract the second number from the first number and return the result
  return a - b;
}

function Multiply(a, b) {
  // Multiply 2 numbers together and return the result
  return a * b;
}

function Divide(a, b) {
  // Divide the first number by the second number and return the result
  return a / b;
}

function Greetings(name) {
  // Return a greeting message with the name
  return "Hello " + name;
}

console.log(Plus(3, 2));
console.log(Minus(8, 2));
console.log(Multiply(15, 4));
console.log(Divide(20, 2));
console.log(Greetings("Luke"));

function PlusTest() {
  // Test the Plus function
  let result = Plus(3, 2);
  if (result === 5) {
    console.log("PlusTest passed");
  } else {
    console.log("PlusTest failed");
  }
}

function MinusTest() {
  // Test the Minus function
  let result = Minus(12, 2);
  if (result === 6) {
    console.log("MinusTest passed");
  } else {
    console.log("MinusTest failed");
  }
}

function MultiplyTest() {
  // Test the Multiply function
  let result = Multiply(15, 4);
  if (result === 60) {
    console.log("MultiplyTest passed");
  } else {
    console.log("MultiplyTest failed");
  }
}

function DivideTest() {
  // Test the Divide function
  let result = Divide("20", 2);
  console.log(result);
  if (result === 10) {
    console.log("DivideTest passed");
  } else {
    console.log("DivideTest failed");
  }
}

function GreetingsTest() {
  // Test the Greetings function
  let result = Greetings("Luke");
  if (result === "Hello Luke") {
    console.log("GreetingsTest passed");
  } else {
    console.log("GreetingsTest failed");
  }
}

PlusTest();
MinusTest();
MultiplyTest();
DivideTest();
GreetingsTest();
