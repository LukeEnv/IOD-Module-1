export function rollDice(diceNumber) {
  const diceElement = document?.getElementById(`dice${diceNumber}`);
  if (diceElement) {
    const modal = document.getElementById("myModal");
    const diceElement = document.getElementById("diceText");
    modal.style.display = "flex";

    const spinningText = document.getElementById("spinningText");
    spinningText.textContent = "Spinning...";

    let i = 1;
    const interval = setInterval(() => {
      if (diceElement) {
        diceElement.textContent = Math.floor(Math.random() * diceNumber) + 1;
      }
      i++;
      if (i > 12) {
        const result = calculateResult(diceNumber);
        diceElement.textContent = result;
        spinningText.textContent = "Result!";

        clearInterval(interval);
        return result;
      }
    }, 100);
  } else {
    return calculateResult(diceNumber);
  }
}

export function calculateResult(diceNumber) {
  if (diceNumber < 2) {
    return "Invalid dice number, minimum is 2";
  }
  if (diceNumber > 12) {
    return "Invalid dice number, maximum is 12";
  }
  return Math.floor(Math.random() * diceNumber) + 1;
}

const closeModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

function mouseenter(element) {
  const diceElement = document.getElementById(`dice${i}`);
  if (diceElement) {
    diceElement.style.backgroundColor = "lightblue";
  }
}

function mouseleave(element) {
  const diceElement = document.getElementById(`dice${i}`);
  if (diceElement) {
    diceElement.style.backgroundColor = "";
  }
}

if (typeof window !== "undefined") {
  window.rollDice = rollDice;
  window.calculateResult = calculateResult;
  window.closeModal = closeModal;
}
