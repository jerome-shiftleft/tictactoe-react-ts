import { useState, ReactNode, ChangeEvent } from "react";

type Props = {
  initialName: string;
  symbol: string;
};

const Player = ({ initialName, symbol }: Props) => {
  const [playerName, setPlayerName] = useState<string>(initialName);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const clickHandler = () => {
    // setIsEditing(!isEditing);
    setIsEditing((editing: boolean) => !editing);
  };

  type EventType = ChangeEvent<HTMLInputElement>;

  const changeHandler = (event: EventType) => {
    setPlayerName(event.target.value);
  };

  let nameField: ReactNode = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    nameField = (
      <input onChange={changeHandler} type="text" required value={playerName} />
    );
  }

  return (
    <li>
      <span className="player-info">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
