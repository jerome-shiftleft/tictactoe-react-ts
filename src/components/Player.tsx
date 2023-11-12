import { useState, ReactNode } from "react";

type Props = {
  name: string;
  symbol: string;
};

const Player = ({ name, symbol }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  //const [playerName, setPlayerName] = useState<string>(name);

  const editPlayer = () => {
    setIsEditing(true);
    console.log("isEditing: ", isEditing);
  };

  const savePlayer = () => {
    setIsEditing(false);
  };

  let playerName: ReactNode = <span className="player-name">{name}</span>;
  let actionButton: ReactNode = <button onClick={editPlayer}>Edit</button>;

  if (isEditing) {
    playerName = <input type="text" value={name} />;
    actionButton = <button onClick={savePlayer}>Save</button>;
  }

  return (
    <li>
      <span className="player-info">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      {actionButton}
    </li>
  );
};

export default Player;
