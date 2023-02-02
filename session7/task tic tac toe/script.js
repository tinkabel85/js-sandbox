const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const title = document.createElement('h2');
title.innerText = 'Tic tac toe game';
title.classList.add('title');
wrapper.appendChild(title);

const text = document.createElement("p");
text.innerText = "Click on the tile to place your X or O";
text.classList.add("text");
wrapper.appendChild(text);

const winner = document.createElement('div');
winner.classList.add('result');
wrapper.appendChild(winner);



const WIDTH = 3;
const HEIGHT = 3;

function createBoard(width, height) {
	let board = [];
	for (let x = 0; x < width; x++) {
		let column = [];
		for (let y = 0; y < height; y++) {
			column.push(0);
		}
		board.push(column);
	}
	return board;
}

((board, currentPlayer) => {
	function renderBoard(board, currentPlayer) {
		const $board = document.createElement("div");
		$board.classList.add("board");

		for (let x = 0; x < board.length; x++) {
			let column = board[x];
			const $column = document.createElement("div");
			$column.classList.add("board__column");

			for (let y = 0; y < column.length; y++) {
				const $cell = document.createElement("button");
				$cell.classList.add("board__cell");
				$cell.setAttribute("id", `cell-${x}-${y}`);

				$cell.addEventListener("click", (e) => {
					if (board[x][y] != 0) {
						return;
					}
					board[x][y] = currentPlayer;
					updateBoard(board);
					currentPlayer = currentPlayer == 1 ? 2 : 1;
					checkResult();
				});
				$column.appendChild($cell);
			}

			$board.appendChild($column);
		}

        wrapper.appendChild($board);
	}

	function updateBoard(board) {
		for (let x = 0; x < board.length; x++) {
			const column = board[x];
			for (let y = 0; y < column.length; y++) {
				const cellValue = column[y];

				if (cellValue == 0) {
					continue;
				}
				const $cell = document.getElementById(`cell-${x}-${y}`);
				if (board[x][y] == 1) {
					$cell.innerText = "X";
				} else {
					$cell.innerText = "O";
				}
			}
		}
	}

    function checkResult() {
        //check for columns
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] === board[i][1] &&
                board[i][0] === board[i][2] &&
                board[i][0] !== 0
            ) {
                console.log("win column");
                showResult(board[i][0]);
                return;
            }
        }
        // check for rows
        for (let i = 0; i < 3; i++) {
            if (
                board[0][i] === board[1][i] &&
                board[0][i] === board[2][i] &&
                board[0][i] !== 0
            ) {
                console.log("win row");
                showResult(board[0][i]);
                return;
            }
        }
        // check for diagonals
        if (
            board[0][0] === board[1][1] &&
            board[0][0] === board[2][2] &&
            board[0][0] !== 0
        ) {
            console.log("win diagonal");
            showResult(board[0][0]);
            return;
        }
        if (
            board[0][2] === board[1][1] &&
            board[0][2] === board[2][0] &&
            board[0][2] !== 0
        ) {
            console.log("win diagonal");
            showResult(board[0][2]);
            return;
        }
        // check for the tie (no winner)
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] !== 0) {
                    count++;
                }
            }
        }
        if (count == 9) {
            showResult('Tie');
            return;
        }
    }

    function showResult(result) {
        if (result == 1) {
            console.log('Player X won');
            winner.innerText = "Player X won!";
        }
        else if (result == 2) {
            console.log('Player O won');
            winner.innerText = "Player O won!";
        }
        else {
            winner.innerText = 'Tie';
            console.log('Tie...');
        }
    }

	window.addEventListener("DOMContentLoaded", () =>
		renderBoard(board, currentPlayer)
	);
})(createBoard(WIDTH, HEIGHT), 1);
