import Board from "./Board";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([{ hist: [Array(9).fill(null)], col: 1, line: 1 }]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove].hist[currentMove];
  const [isReversed, setIsReversed] = useState(false);

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

  const RenderMoves = () => {
    const moves = isReversed ? history.slice().reverse() : history;
    return moves.map((step, index) => {
      const move = isReversed ? history.length - 1 - index : index;
      const desc = move ? `Go to move #${move} (L:${step.line} x C:${step.col})` : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <button onClick={() => setIsReversed(!isReversed)}>Reverse</button>
        <ol reversed={isReversed}>
          <RenderMoves />
        </ol>
      </div>
    </div>
  );
}
