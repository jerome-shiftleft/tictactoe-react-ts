import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
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

function deriveActivePlayer(gameTurns: Turn[]) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
} // end of function deriveActivePlayer(gameTurns)

function App() {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  //const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </ThemeProvider>
  );
} // end of function App()

export default App;
