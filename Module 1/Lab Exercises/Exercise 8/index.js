function rollDice(diceNumber) {
  const diceElement = document.getElementById(`dice${diceNumber}`);
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
        const result = Math.floor(Math.random() * diceNumber) + 1;
        console.log("Result: " + result);

        diceElement.textContent = result;
        spinningText.textContent = "Result!";

        clearInterval(interval);
      }
    }, 100);
  }
}

const closeModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

for (let i = 1; i <= 12; i++) {
  const diceElement = document.getElementById(`dice${i}`);
  if (diceElement) {
    diceElement.addEventListener("mouseenter", () => {
      diceElement.style.backgroundColor = "lightblue";
    });
    diceElement.addEventListener("mouseleave", () => {
      diceElement.style.backgroundColor = "";
    });
  }
}
