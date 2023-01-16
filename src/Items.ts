import {Item, ItemType} from './types';

import circleIcon from './assets/circle-white.png';
import squareIcon from './assets/square-white.png';
import diamondIcon from './assets/diamond-white.png';
import triangleIcon from './assets/triangle-white.png';

export const items: Item[] = [
  {
    label: 'A',
    itemType: ItemType.A,
    color: '#E21B3C',
    icon: triangleIcon,
    unitPoints: 50,
    bonus: {
      numItems: 3,
      rewardedPoints: 200,
    },
  },
  {
    label: 'B',
    itemType: ItemType.B,
    color: '#1368CE',
    icon: diamondIcon,
    unitPoints: 30,
    bonus: {
      numItems: 2,
      rewardedPoints: 90,
    },
  },
  {
    label: 'C',
    itemType: ItemType.C,
    color: '#FFA602',
    icon: circleIcon,
    unitPoints: 20,
  },
  {
    label: 'D',
    itemType: ItemType.D,
    color: '#26890C',
    icon: squareIcon,
    unitPoints: 15,
  },
];
