
type colType = string | null;

type GameBoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: (colType | string)[][];
};

const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {  

  return (
    <ol id="game-board">
      {board.map((row, rowIndex: number) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}; // end of function GameBoard

export default GameBoard;
