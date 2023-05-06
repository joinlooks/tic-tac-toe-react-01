import { useEffect, useState } from "react";
import "./App.css";
import Square from "./Square";

const App = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState("O");
	const [result, setResult] = useState({ winner: "none", state: "none" });

	const patterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	useEffect(() => {
		checkForWinner();
		checkForTie();
		setPlayer(player === "X" ? "O" : "X");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [board]);

	useEffect(() => {
		if (result.state !== "none") {
			alert(`Winner : ${result.winner}`);
			setBoard(Array(9).fill(null));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [result]);

	const chooseSquare = (square) => {
		setBoard(
			board.map((value, index) => {
				if (index === square && !value) return player;
				return value;
			})
		);
	};

	const checkForWinner = () => {
		patterns.forEach((pattern) => {
			const player = board[pattern[0]];
			if (!player) return;

			let found = true;
			pattern.forEach((index) => {
				if (board[index] !== player) found = false;
			});

			if (found) setResult({ winner: player, state: "won" });
		});
	};

	const checkForTie = () => {
		let filled = true;
		board.forEach((square) => {
			if (!square) filled = false;
		});

		if (filled) setResult({ winner: "No One", state: "tie" });
	};

	return (
		<div className="App">
			<div className="board">
				<Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
				<Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
				<Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
				<Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
				<Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
				<Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
				<Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
				<Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
				<Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
			</div>
		</div>
	);
};

export default App;
