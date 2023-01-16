import {describe, it} from 'vitest';
import {renderHook, act} from '@testing-library/react-hooks';
import {ItemType} from '../../types';
import {useCollectItems} from '../../hooks/useCollectItems';

describe('useCollectItems', () => {
  it('should exist', () => {
    expect(typeof useCollectItems).toBe('function');
  });

  it('should collect items of type A, B, C, D, and increment the respective state variables', () => {
    const {result} = renderHook(() => useCollectItems());
    act(() => {
      result.current.clearItems();
    });
    act(() => {
      result.current.collectItems(ItemType.A);
    });
    expect(result.current.itemsCollected[0].quantity).toBe(1);

    act(() => {
      result.current.collectItems(ItemType.B);
    });
    expect(result.current.itemsCollected[1].quantity).toBe(1);

    act(() => {
      result.current.collectItems(ItemType.C);
    });
    expect(result.current.itemsCollected[2].quantity).toBe(1);

    act(() => {
      result.current.collectItems(ItemType.D);
    });
    expect(result.current.itemsCollected[3].quantity).toBe(1);
  });

  it('should collect items multiple times', () => {
    const {result} = renderHook(() => useCollectItems());
    act(() => {
      result.current.collectItems(ItemType.A);
      result.current.collectItems(ItemType.A);
      result.current.collectItems(ItemType.A);
      result.current.collectItems(ItemType.A);
      result.current.collectItems(ItemType.A);
    });
    expect(result.current.itemsCollected[0].quantity).toBe(5);

    act(() => {
      result.current.collectItems(ItemType.B);
      result.current.collectItems(ItemType.B);
    });
    expect(result.current.itemsCollected[1].quantity).toBe(2);

    act(() => {
      result.current.collectItems(ItemType.C);
      result.current.collectItems(ItemType.C);
      result.current.collectItems(ItemType.C);
    });
    expect(result.current.itemsCollected[2].quantity).toBe(3);

    act(() => {
      result.current.collectItems(ItemType.D);
      result.current.collectItems(ItemType.D);
      result.current.collectItems(ItemType.D);
    });
    expect(result.current.itemsCollected[3].quantity).toBe(3);
  });

  it('should clear the state of all the items and set it to 0', () => {
    const {result} = renderHook(() => useCollectItems());
    act(() => {
      result.current.collectItems(ItemType.A);
      result.current.collectItems(ItemType.B);
      result.current.collectItems(ItemType.C);
      result.current.collectItems(ItemType.D);
      result.current.clearItems();
    });

    expect(result.current.itemsCollected[0].quantity).toBe(0);
    expect(result.current.itemsCollected[1].quantity).toBe(0);
    expect(result.current.itemsCollected[2].quantity).toBe(0);
    expect(result.current.itemsCollected[3].quantity).toBe(0);
  });
});
