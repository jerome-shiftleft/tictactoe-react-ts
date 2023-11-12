import { useState } from "react";

type Props = {
  name: string | undefined;
  symbol: string;
};

const Player = ({ name, symbol }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const editPlayer = () => {
    setIsEditing(true);
    console.log('isEditing: ', isEditing);
  }

  return (
    <li>
      <span className="player-info">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => editPlayer()}>Edit</button>
    </li>
  );
};

export default Player;
