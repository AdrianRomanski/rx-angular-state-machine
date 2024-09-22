export interface Character {
  id: string;
  name: string;
  level: number;
  faction: Faction;
  race: HordeRace | AllianceRace;
  class: Class;
  profession: Profession;
}

export enum Faction {
  Horde='Horde', Alliance='Alliance'
}

export enum HordeRace {
  Orc = 'Orc', Tauren = 'Tauren', Undead='Undead', Troll='Troll'
}

export enum AllianceRace {
  Gnome = 'Gnome', Human = 'Human', NightElf= 'Night Elf'
}

export enum Class {
  Warrior = 'Warrior', Mage = 'Mage', Hunter='Hunter',
  Priest = 'Priest', Rogue = 'Rogue', Paladin='Paladin',
  Shaman = 'Shaman', Warlock = 'Warlock', Druid='Druid',
}

export enum Profession {
  Blacksmith = 'Blacksmith', Herbalism = 'Herbalism',
  Enchanting= 'Enchanting', Alchemy='Alchemy'
}

