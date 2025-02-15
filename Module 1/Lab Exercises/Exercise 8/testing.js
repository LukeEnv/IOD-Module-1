import { calculateResult } from "./index.js";

if (calculateResult(6) <= 6 && calculateResult(6) >= 1) {
  // this should pass
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}

if (calculateResult(2) <= 2 && calculateResult(2) >= 1) {
  // this should pass
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}

if (calculateResult(12) <= 12 && calculateResult(12) >= 1) {
  // this should pass
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}

if (calculateResult(20) <= 20 && calculateResult(20) >= 1) {
  // this should fail as the maximum dice number is 12
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}
