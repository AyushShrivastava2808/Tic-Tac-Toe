let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turn = "X";
let gameOver = false;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText
        ) {
            gameOver = true;
            alert(`Player ${boxes[a].innerText} Wins!`);
            return true;
        }
    }
    return false;
}

function checkDraw() {
    let filled = [...boxes].every(box => box.innerText !== "");
    if (filled && !gameOver) {
        alert("It's a Draw!");
        gameOver = true;
    }
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!gameOver && box.innerText === "") {
            box.innerText = turn;
            box.style.color = turn === "X" ? "red" : "blue";

            if (!checkWinner()) {
                checkDraw();
                turn = turn === "X" ? "O" : "X";
            }
        }
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
    });
    turn = "X";
    gameOver = false;
});
