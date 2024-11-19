import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], squares: [a, b, c] };
    }
  }

  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i, col, row) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares, col, row);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner.player;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const boardSize = 3;
  const rows = Array(boardSize).fill(null);

  return (
    <>
      <div className="status">{status}</div>
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {rows.map((_, colIndex) => {
            const squareIndex = rowIndex * boardSize + colIndex;
            return (
              <Square
                key={squareIndex}
                value={squares[squareIndex]}
                winner={winner && winner.squares.includes(squareIndex)}
                onSquareClick={() => handleClick(squareIndex, colIndex + 1, rowIndex + 1)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Board;
