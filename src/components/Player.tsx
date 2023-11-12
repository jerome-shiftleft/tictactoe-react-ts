import {useState} from 'react';

type Props = {
  name: string | undefined;
  symbol: string;
}

const Player = ({name, symbol}: Props) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <li>
      <span className="player-info">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};

export default Player;
