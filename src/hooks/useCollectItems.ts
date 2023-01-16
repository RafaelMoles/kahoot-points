import {useState} from 'react';
import {CollectedItem, ItemType} from '../types';

export const useCollectItems = () => {
  const [numItemsA, setNumItemsA] = useState(0);
  const [numItemsB, setNumItemsB] = useState(0);
  const [numItemsC, setNumItemsC] = useState(0);
  const [numItemsD, setNumItemsD] = useState(0);

  const collectItems = (itemType: ItemType) => {
    switch (itemType) {
      case ItemType.A:
        setNumItemsA((prevNumItemsA) => prevNumItemsA + 1);
        break;
      case ItemType.B:
        setNumItemsB((prevNumItemsB) => prevNumItemsB + 1);
        break;
      case ItemType.C:
        setNumItemsC((prevNumItemsC) => prevNumItemsC + 1);
        break;
      case ItemType.D:
        setNumItemsD((prevNumItemsD) => prevNumItemsD + 1);
        break;
    }
  };

  const clearItems = () => {
    setNumItemsA(0);
    setNumItemsB(0);
    setNumItemsC(0);
    setNumItemsD(0);
  };

  const itemsCollected: CollectedItem[] = [
    {
      itemType: ItemType.A,
      isCollected: numItemsA > 0,
      quantity: numItemsA,
    },
    {
      itemType: ItemType.B,
      isCollected: numItemsB > 0,
      quantity: numItemsB,
    },
    {
      itemType: ItemType.C,
      isCollected: numItemsC > 0,
      quantity: numItemsC,
    },
    {
      itemType: ItemType.D,
      isCollected: numItemsD > 0,
      quantity: numItemsD,
    },
  ];

  return {collectItems, clearItems, itemsCollected};
};
