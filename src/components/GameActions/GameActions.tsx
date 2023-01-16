import React from 'react';

import ActionButton from '../Buttons/ActionButton';

import {items} from '../../Items';
import {ItemType} from '../../types';

const GameActions: React.FC<{collectItems: (itemType: ItemType) => void}> = ({
  collectItems,
}) => {
  return (
    <div className="button-group">
      {items.map((item) => (
        <ActionButton
          icon={item.icon}
          key={item.label}
          onClick={() => collectItems(item.itemType)}
          color={item.color}>
          {item.label}
        </ActionButton>
      ))}
    </div>
  );
};

export default GameActions;
