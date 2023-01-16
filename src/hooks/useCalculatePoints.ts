import {useState} from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import {CollectedItem} from '../types';
import {items} from '../Items';

export const useCalculatePoints = (itemsCollected: CollectedItem[]) => {
  const [bonusPoints, setBonusPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const [collected, setCollected] = useState<CollectedItem[]>(itemsCollected);

  //Calculate points and bonus
  const calculatePoints = (collectedItem: CollectedItem) => {
    const {quantity} = collectedItem;

    const index = items.findIndex(
      (item) => item.itemType == collectedItem.itemType,
    );
    const {bonus, unitPoints} = items[index];

    const isEligibleForBonus = bonus && quantity >= bonus.numItems;

    if (!isEligibleForBonus) {
      const itemScore = quantity * unitPoints;
      return {itemScore, extraPointsForBonus: 0};
    }

    const quantityWithoutBonus = quantity - bonus.numItems;
    const itemScore = quantityWithoutBonus * unitPoints + bonus.rewardedPoints;

    const pointsWithoutBonus = bonus.numItems * unitPoints;
    const extraPointsForBonus = bonus.rewardedPoints - pointsWithoutBonus;

    return {itemScore, extraPointsForBonus};
  };

  useDeepCompareEffect(() => {
    const updatedArray = itemsCollected.map((item) => {
      if (item.isCollected) {
        const {itemScore, extraPointsForBonus} = calculatePoints(item);
        return {...item, itemScore, extraPointsForBonus};
      }
      return item;
    });

    const updatedTotalPoints = updatedArray.reduce(
      (total, item) => total + (item?.itemScore ?? 0),
      0,
    );

    const updatedBonusPoints = updatedArray.reduce(
      (total, item) => total + (item?.extraPointsForBonus ?? 0),
      0,
    );

    setCollected(updatedArray);
    setTotalPoints(updatedTotalPoints);
    setBonusPoints(updatedBonusPoints);
  }, [itemsCollected]);

  const clearPoints = () => {
    setBonusPoints(0);
    setTotalPoints(0);
  };

  return {
    totalPoints,
    bonusPoints,
    clearPoints,
    itemsCollectedWithPoints: collected,
  };
};
