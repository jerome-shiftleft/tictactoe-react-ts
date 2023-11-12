import { useState } from "react";

type Props = {
  name: string;
  symbol: string;
};

const Player = ({ name, symbol }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(name);

  const editPlayer = () => {
    setIsEditing(true);
    console.log("isEditing: ", isEditing);
  };
  
  const savePlayer = () => {
    setIsEditing(false);
  }

  return (
    <li>
      <span className="player-info">
        {isEditing ? <input type="text" value={playerName} /> : <span className="player-name">{playerName}</span>}

        <span className="player-symbol">{symbol}</span>
      </span>
      
      {isEditing ? (<button onClick={savePlayer}>Save</button>) : (<button onClick={editPlayer}>Edit</button>)}
      
    </li>
  );
};

export default Player;
