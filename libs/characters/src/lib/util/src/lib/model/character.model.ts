export interface Character {
  id: string;
  name: string;
  level: number;
  faction: Faction;
  race: HordeRace | AllianceRace;
  class: Class;
  profession: Profession;
  health: number;
  mana: number;
  strength: number;
  agility: number;
  intellect: number;
  stamina: number;
  armor: number;
  abilities: Ability[];
  biography: string;
  equipment: Equipment[];
  actions: string[];
}

export interface Ability {
  name: string;
  description: string;
  cooldown: number;
}

export interface Equipment {
  slot: EquipmentSlot;
  name: string;
  rarity: Rarity;
  stats: Stat[];
}

export interface Stat {
  statType: StatType;
  value: number;
}

export enum EquipmentSlot {
  Head = 'Head',
  Chest = 'Chest',
  Legs = 'Legs',
  Feet = 'Feet',
  Weapon = 'Weapon',
  Shield = 'Shield',
}

export enum Rarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Epic = 'Epic',
  Legendary = 'Legendary',
}

export enum StatType {
  Strength = 'Strength',
  Agility = 'Agility',
  Intellect = 'Intellect',
  Stamina = 'Stamina',
  Armor = 'Armor',
}

export enum Faction {
  Horde='Horde', Alliance='Alliance'
}

export enum HordeRace {
  Orc = 'Orc', Tauren = 'Tauren', Undead='Undead', Troll='Troll',
  Blood_Elf = 'Blood_Elf', Goblin = 'Goblin',
  Nightborne='Nightborne', Highmountain_Tauren='Highmountain_Tauren',
  Zandalari_Troll='Zandalari_Troll', Vulpera='Vulpera'
}

export enum AllianceRace {
  Gnome = 'Gnome', Human = 'Human', NightElf= 'Night_Elf',
  Draenei = 'Draenei', Worgen = 'Worgen', Void_Elf= 'Void_Elf',
  Lightforged_Draenei = 'Lightforged_Draenei', Dwarf='Dwarf',
  Kul_Tiran = 'Kul Tiran', Mechagnome='Mechagnome'
}

export enum Class {
  Death_Knight = 'Death_Knight', Demon_Hunter = 'Demon_Hunter', Druid='Druid',
  Hunter = 'Hunter', Mage = 'Mage', Monk='Monk',
  Paladin = 'Paladin', Priest = 'Priest', Rogue='Rogue',
  Shaman = 'Shaman', Warlock = 'Warlock', Warrior='Warrior',
}

export enum Profession {
  Alchemy = 'Alchemy', Blacksmithing = 'Blacksmithing',
  Enchanting= 'Enchanting', Engineering='Engineering',
  Herbalism= 'Herbalism', Inscription='Inscription',
  Jewelcrafting= 'Jewelcrafting', Leatherworking='Leatherworking',
  Mining= 'Mining', Skinning='Skinning', Tailoring='Tailoring',
}

