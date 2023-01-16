import React from 'react';
import {CollectedItem} from '../../types';

import kahootLitIcon from '../../assets/Kahoot-lit.png';
import trophyIcon from '../../assets/trophy.png';

import './StatsSidebar.css';

const StatsSidebar: React.FC<{
  items: CollectedItem[];
  totalPoints: number;
  bonusPoints: number;
  onClickNewGame: () => void;
}> = ({items, totalPoints, bonusPoints, onClickNewGame}) => {
  return (
    <>
      <div>
        <div className="stats-header">
          <div className="stats-type">Items</div>
          <div className="stats-quantity">Quantity</div>
          <div className="stats-score">Score</div>
        </div>
        <div className="stats-wrapper">
          {items.map((item, index) => (
            <>
              {item.isCollected && (
                <div className="stats-row" key={index}>
                  <div className="stats-type">{item.itemType}</div>
                  <div className="stats-quantity">{item.quantity}</div>
                  <div className="stats-score">{item.itemScore}</div>
                </div>
              )}
            </>
          ))}
        </div>

        <div className="stats-footer">
          <div className="bonus">
            <div className="title-wrapper">
              <img className="icon-lit" src={kahootLitIcon} />
              <span className="bonus-title">BONUS</span>
            </div>
            <div className="bonus-points">+ {bonusPoints}</div>
          </div>
          <div className="points">
            <div className="title-wrapper">
              <img className="icon-trophy" src={trophyIcon} />
              <span className="points-title">TOTAL POINTS</span>
            </div>
            <div className="total-points" style={{fontSize: 'large'}}>
              {totalPoints}
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div className="new-game" onClick={onClickNewGame}>
              New Game
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsSidebar;
