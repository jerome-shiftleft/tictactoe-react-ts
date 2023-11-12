import { useState } from "react";

type colType = string | null;

const initialGameBoard: colType[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; // end of const initialGameBoard

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const selectSquareHandler = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      prevGameBoard[rowIndex][colIndex] = "X";
      return updateBoard;
    });
    console.log('updated game board:');
    console.log(gameBoard);
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}; // end of function GameBoard

export default GameBoard;
