function Square({ value, onSquareClick, winner }) {
  return (
    <button
      className={`square ${winner ? "winnerSquare" : ""}`}
      onClick={onSquareClick}
      aria-label={`Square ${value ? value : "empty"}`}
    >
      {value}
    </button>
  );
}

export default Square;
