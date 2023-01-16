export enum ItemType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export interface BonusReward {
  numItems: number;
  rewardedPoints: number;
}

export interface Item {
  bonus?: BonusReward;
  color: string;
  icon: string;
  itemType: ItemType;
  label: string;
  unitPoints: number;
}

export interface CollectedItem {
  extraPointsForBonus?: number;
  isCollected: boolean;
  itemScore?: number;
  itemType: ItemType;
  quantity: number;
}
