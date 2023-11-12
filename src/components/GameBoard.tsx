type colType = (string | null);

const initialGameBoard: colType[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; // end of const initialGameBoard

const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}; // end of function GameBoard

export default GameBoard;
