type Props = {
  winner: string | null;
}

function GameOver({winner}: Props) {
  return (
    <div id="game-over">
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  )
}

export default GameOver;