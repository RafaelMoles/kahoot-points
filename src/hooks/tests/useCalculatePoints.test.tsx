import {describe, it} from 'vitest';
import {renderHook, act} from '@testing-library/react-hooks';

import {ItemType} from '../../types';
import {useCalculatePoints} from '../useCalculatePoints';
import {
  itemsBasicInput,
  itemsWithNoBonus,
  itemsWithAllBonus,
} from '../../mock/mock';

describe('useCalculatePoints', () => {
  it('should exist', () => {
    expect(typeof useCalculatePoints).toBe('function');
  });

  it('should return the correct totalPoints and bonusPoints for basic input', () => {
    const {result} = renderHook(() => useCalculatePoints(itemsBasicInput));
    const {totalPoints, bonusPoints} = result.current;
    expect(totalPoints).toBe(140);
    expect(bonusPoints).toBe(30);
  });

  it('should return the correct totalPoints and bonusPoints with NO bonus included', () => {
    const {result} = renderHook(() => useCalculatePoints(itemsWithNoBonus));
    const {totalPoints, bonusPoints} = result.current;
    expect(totalPoints).toBe(430);
    expect(bonusPoints).toBe(0);
  });

  it('should return the correct totalPoints and bonusPoints with ALL bonus', () => {
    const {result} = renderHook(() => useCalculatePoints(itemsWithAllBonus));
    const {totalPoints, bonusPoints} = result.current;
    expect(totalPoints).toBe(720);
    expect(bonusPoints).toBe(80);
  });

  it('should not add points for items that are not collected', () => {
    const {result} = renderHook(() => useCalculatePoints(itemsBasicInput));
    act(() => {
      result.current.clearPoints();
    });
    const {itemsCollectedWithPoints} = result.current;
    const item = itemsCollectedWithPoints.find(
      (item) => item.itemType === ItemType.D,
    );
    expect(item?.itemScore).toBe(undefined);
  });

  it('should set all points to 0 when clearPoints is called', () => {
    const {result} = renderHook(() => useCalculatePoints(itemsBasicInput));
    act(() => {
      result.current.clearPoints();
    });
    const {totalPoints, bonusPoints} = result.current;
    expect(totalPoints).toBe(0);
    expect(bonusPoints).toBe(0);
  });
});
