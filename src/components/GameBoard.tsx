import { useState } from "react";

type colType = string | null;

const initialGameBoard: colType[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; // end of const initialGameBoard

type GameBoardProps = {
  activePlayerSymbol: string;
  onSelectSquare: () => void;
}

const GameBoard = ({onSelectSquare, activePlayerSymbol}: GameBoardProps) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      prevGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    //console.log('updated game board:');
    //console.log(gameBoard);
    onSelectSquare()
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}; // end of function GameBoard

export default GameBoard;
