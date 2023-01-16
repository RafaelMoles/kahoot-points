import {describe, it} from 'vitest';
import {renderHook, act} from '@testing-library/react-hooks';
import {ItemType} from '../../types';
import {useCalculatePoints} from '../useCalculatePoints';

describe('useCalculatePoints', () => {
  const initialItemsCollected = [
    {itemType: ItemType.A, quantity: 1, isCollected: true},
    {itemType: ItemType.B, quantity: 2, isCollected: true},
    {itemType: ItemType.C, quantity: 0, isCollected: false},
    {itemType: ItemType.D, quantity: 0, isCollected: false},
  ];

  it('should return the correct totalPoints and bonusPoints', () => {
    const {result} = renderHook(() =>
      useCalculatePoints(initialItemsCollected),
    );
    const {totalPoints, bonusPoints} = result.current;
    expect(totalPoints).toBe(140);
    expect(bonusPoints).toBe(30);
  });

  it('should clear the points when clearPoints is called', () => {
    const {result} = renderHook(() =>
      useCalculatePoints(initialItemsCollected),
    );
    act(() => {
      result.current.clearPoints();
    });
    const {totalPoints, bonusPoints} = result.current;
    expect(totalPoints).toBe(0);
    expect(bonusPoints).toBe(0);
  });

  it('should not add points for items that are not collected', () => {
    const {result} = renderHook(() =>
      useCalculatePoints(initialItemsCollected),
    );
    act(() => {
      result.current.clearPoints();
    });
    const {itemsCollectedWithPoints} = result.current;
    const item = itemsCollectedWithPoints.find(
      (item) => item.itemType === ItemType.D,
    );
    expect(item?.itemScore).toBe(undefined);
  });
});
