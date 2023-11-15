type Square = {
  row: number;
  col: number;
};

type Turn = {
  player: string;
  square: Square;
};

type LogProps = {
  turns: Turn[];
};

function Log({ turns }: LogProps) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        // <li key={`${turn.square.row}${turn.square.row}`}>
        <li key={index}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
