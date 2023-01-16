import React from 'react';
import {CollectedItem} from '../../types';

const StatsSidebar: React.FC<{
  items: CollectedItem[];
  totalPoints: number;
  bonusPoints: number;
  onClickNewGame: () => void;
}> = ({items, totalPoints, bonusPoints, onClickNewGame}) => {
  console.log(items);
  return (
    <>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <p>{item.itemType}</p>
            <p>{item.itemScore}</p>
          </div>
        ))}
      </div>
      <div>
        <p>{bonusPoints}</p>
        <p>{totalPoints}</p>
      </div>
      <button onClick={onClickNewGame}>New Game</button>
    </>
  );
};

export default StatsSidebar;
