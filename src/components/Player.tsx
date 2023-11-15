import { useState, ReactNode, ChangeEvent } from "react";

type Props = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, newName: string) => void;
};

const Player = ({ initialName, symbol, isActive, onChangeName }: Props) => {
  const [playerName, setPlayerName] = useState<string>(initialName);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const clickHandler = () => {
    // setIsEditing(!isEditing);
    setIsEditing((editing: boolean) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
    
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
    <li className={isActive ? 'active': undefined}>
      <span className="player-info">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
