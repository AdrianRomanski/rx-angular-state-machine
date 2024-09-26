import { Faction } from '@characters/util/model';
import { BoxUI } from '@shared/util/model';

export const FACTION_BOX: { [key: string]: BoxUI } = {
  [Faction.Horde]: {
    border: {
      size: '1px',
      type: 'solid',
      color: '#ff4500',
      radius: '10px'
    },
    background: {
      position: '145deg',
      firstColor: '#7a0b0b',
      secondColor: '#a51b1b',
      fontColor: 'white'
    },
  },
  [Faction.Alliance]: {
    border: {
      size: '1px',
      type: 'solid',
      color: '#0077ff',
      radius: '10px'
    },
    background: {
      position: '145deg',
      firstColor: '#2e518b',
      secondColor: '#3b64a5',
      fontColor: 'white'
    },
  },
};



