import {ItemType} from '../types';

export const itemsBasicInput = [
  {itemType: ItemType.A, quantity: 1, isCollected: true},
  {itemType: ItemType.B, quantity: 2, isCollected: true},
  {itemType: ItemType.C, quantity: 0, isCollected: false},
  {itemType: ItemType.D, quantity: 0, isCollected: false},
];

export const itemsWithNoBonus = [
  {itemType: ItemType.A, quantity: 1, isCollected: true},
  {itemType: ItemType.B, quantity: 1, isCollected: true},
  {itemType: ItemType.C, quantity: 10, isCollected: true},
  {itemType: ItemType.D, quantity: 10, isCollected: true},
];

export const itemsWithAllBonus = [
  {itemType: ItemType.A, quantity: 4, isCollected: true},
  {itemType: ItemType.B, quantity: 3, isCollected: true},
  {itemType: ItemType.C, quantity: 10, isCollected: true},
  {itemType: ItemType.D, quantity: 10, isCollected: true},
];
