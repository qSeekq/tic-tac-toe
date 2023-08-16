const x = [];
const o = [];
const winnerElement = document.querySelector(".winner");
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = "x";
const boxElements = document.querySelectorAll(".box");
boxElements.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!box.classList.contains("js-clicked")) {
      if (turn === "x") {
        box.innerHTML = "x";
        x.push(index);
        turn = "o";
      } else {
        box.innerHTML = "o";
        o.push(index);
        turn = "x";
      }
      box.classList.add("js-clicked");

      let inside;
      for (let i = 0; i < winningPositions.length; i++) {
        const winningPosition = winningPositions[i];
        for (let j = 0; j < winningPosition.length; j++) {
          if (turn === "x" && winningPosition[j] == index) {
            winningPosition[j] = "o";
          } else if (turn === "o" && winningPosition[j] == index) {
            winningPosition[j] = "x";
          }
          inside += winningPosition[j];
        }

        if (isNaN(winningPosition[2])) {
          if (inside.includes("xxx")) {
            winnerElement.innerHTML = "X win";
          } else if (inside.includes("ooo")) {
            winnerElement.innerHTML - "O win";
          }
        }
        inside = "";
      }

      console.log(winningPositions);
    }
  });
});
