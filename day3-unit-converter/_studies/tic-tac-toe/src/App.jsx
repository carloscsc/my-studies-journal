import Board from "./Board";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([{ hist: [Array(9).fill(null)], col: 1, line: 1 }]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove].hist[currentMove];

  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares, col, row) {
    const nextHistory = {
      hist: [...history[currentMove].hist.slice(0, currentMove + 1), nextSquares],
      col: col,
      line: row,
    };

    // const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory([...history, nextHistory]);

    setCurrentMove(nextHistory.hist.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setHistory(history.slice(0, nextMove + 1));
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move} (L:${squares.line} x C:${squares.col})`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        {currentMove === move ? <p>{description}</p> : <button onClick={() => jumpTo(move)}>{description}</button>}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
