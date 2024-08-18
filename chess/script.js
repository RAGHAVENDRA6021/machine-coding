const makeBackgroundRed = (first, second) => {
  const element = document.querySelector(
    `.box[data-row="${first}"][data-column="${second}"]`
  );
  element.classList.remove("black");
  element.classList.remove("white");
  element.classList.add("red");
};

document.addEventListener("DOMContentLoaded", function () {
  const chess = document.getElementById("chess");
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      const box = document.createElement("div");
      box.setAttribute("data-row", i);
      box.setAttribute("data-column", j);
      box.className = "box";
      if ((i + j) % 2 == 0) box.classList.add("black");
      else box.classList.add("white");

      chess.appendChild(box);
      box.addEventListener("click", function (event) {
        const row = Number(event.target.getAttribute("data-row"));
        const column = Number(event.target.getAttribute("data-column"));
        let first = row,
          second = column;
        while (first >= 0 && second >= 0) {
          makeBackgroundRed(first, second);
          first--;
          second--;
        }

        (first = row + 1), (second = column + 1);
        while (first < 8 && second < 8) {
          makeBackgroundRed(first, second);
          first++;
          second++;
        }

        (first = row - 1), (second = column + 1);

        while (first >= 0 && second < 8) {
          makeBackgroundRed(first, second);
          first--;
          second++;
        }

        (first = row + 1), (second = column - 1);

        while (first < 8 && second >= 0) {
          makeBackgroundRed(first, second);
          first++;
          second--;
        }
      });
    }
  }
});
