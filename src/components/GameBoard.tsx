type colType = string | null;

const initialGameBoard: colType[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; // end of const initialGameBoard

type Turn = {
  square: {
    row: number;
    col: number;
  };
  player: string;
};

type GameBoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: Turn[];
};

const GameBoard = ({ onSelectSquare, turns }: GameBoardProps) => {
  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  } 

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex: number) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}; // end of function GameBoard

export default GameBoard;
