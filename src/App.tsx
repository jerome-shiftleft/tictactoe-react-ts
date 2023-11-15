import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
import "./App.scss";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

type Turn = {
  square: {
    row: number;
    col: number;
  };
  player: string;
};

type colType = string | null;

const initialGameBoard: colType[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; // end of const initialGameBoard

function deriveActivePlayer(gameTurns: Turn[]) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
} // end of function deriveActivePlayer(gameTurns)

function App() {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner: (string | null | boolean) = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }

  } // end of for (const combination of WINNING_COMBINATIONS)

  const hasDraw: boolean = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: activePlayer,
        },
        ...prevTurns,
      ]; // end of const updatedTurns

      return updatedTurns;
    }); // end of  setGameTurns((prevTurns) => {
  } // end of function handleSelectSquare

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </ThemeProvider>
  );
} // end of function App()

export default App;
