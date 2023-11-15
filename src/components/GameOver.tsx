type Props = {
  winner: string | null;
}

function GameOver({winner}: Props) {
  return (
    <div id="game-over">
      <p>{winner} won!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  )
}

export default GameOver;