import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.scss";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
      </div>
    </ThemeProvider>
  );
}

export default App;
