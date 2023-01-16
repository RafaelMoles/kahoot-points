import React /* , {useState} */ from 'react';

import PageWrapper from '../components/PageWrapper/PageWrapper';
import GameActions from '../components/GameActions/GameActions';
import StatsSidebar from '../components/StatsSidebar/StatsSidebar';

import {useCalculatePoints} from '../hooks/useCalculatePoints';
import {useCollectItems} from '../hooks/useCollectItems';

import './KahootGame.css';

const KahootGame: React.FC = () => {
  const {collectItems, clearItems, itemsCollected} = useCollectItems();

  const {totalPoints, bonusPoints, clearPoints, itemsCollectedWithPoints} =
    useCalculatePoints(itemsCollected);

  const handleNewGame = () => {
    clearItems();
    clearPoints();
  };

  return (
    <>
      <PageWrapper
        gameActions={<GameActions collectItems={collectItems} />}
        statsSidebar={
          <StatsSidebar
            items={itemsCollectedWithPoints}
            totalPoints={totalPoints}
            bonusPoints={bonusPoints}
            onClickNewGame={handleNewGame}
          />
        }
      />
    </>
  );
};

export default KahootGame;
