export interface CharacterDomain {
  id: string;
  name: string;
  level: string;
  faction: string;
  race: string;
  class: string;
  profession: string;
  health: string;
  mana: string;
  strength: string;
  agility: string;
  intellect: string;
  stamina: string;
  armor: string;
  abilities: AbilityDomain[];
  biography: string;
  equipment: EquipmentDomain[];
}

export interface AbilityDomain {
  name: string;
  description: string;
  cooldown: string;
}

export interface EquipmentDomain {
  slot: string;
  name: string;
  rarity: string;
  stats: StatDomain[];
}

export interface StatDomain {
  statType: string;
  value: string;
}
