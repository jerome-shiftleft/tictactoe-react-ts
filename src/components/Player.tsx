import { useState, ReactNode } from "react";

type Props = {
  name: string;
  symbol: string;
};

const Player = ({ name, symbol }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const clickHandler = () => {
    // setIsEditing(!isEditing);
    setIsEditing((editing: boolean) => !editing);
  };

  let playerName: ReactNode = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        defaultValue={name}
        placeholder="Player Name"
      />
    );
  }

  return (
    <li>
      <span className="player-info">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
