import {describe, test} from 'vitest';
import {ItemType} from '../../types';
import {useCollectItems} from '../../hooks/useCollectItems';

describe('useCollectItems', () => {
  test('collecting items of type A, B, C, and D increments the respective state variables', () => {
    const {collectItems, clearItems} = useCollectItems();
    clearItems();

    collectItems(ItemType.A);
    expect(useCollectItems().itemsCollected[0].quantity).toBe(1);

    collectItems(ItemType.B);
    expect(useCollectItems().itemsCollected[1].quantity).toBe(1);

    collectItems(ItemType.C);
    expect(useCollectItems().itemsCollected[2].quantity).toBe(1);

    collectItems(ItemType.D);
    expect(useCollectItems().itemsCollected[3].quantity).toBe(1);
  });

  test('clearItems sets all state variables to 0', () => {
    const {collectItems, clearItems} = useCollectItems();
    collectItems(ItemType.A);
    collectItems(ItemType.B);
    collectItems(ItemType.C);
    collectItems(ItemType.D);

    clearItems();
    expect(useCollectItems().itemsCollected[0].quantity).toBe(0);
    expect(useCollectItems().itemsCollected[1].quantity).toBe(0);
    expect(useCollectItems().itemsCollected[2].quantity).toBe(0);
    expect(useCollectItems().itemsCollected[3].quantity).toBe(0);
  });
});
