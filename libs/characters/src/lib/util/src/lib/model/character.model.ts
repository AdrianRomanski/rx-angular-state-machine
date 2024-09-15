export interface Character {
  id: string;
  name: string;
  race: HordeRace | AllianceRace;
  class: Class;
  level: number;
  profession: Profession;
 }

export enum HordeRace {
  ORC = 'ORC', TAUREN = 'TAUREN', UNDEAD='UNDEAD'
}

export enum AllianceRace {
  Gnome = 'GNOME', Human = 'HUMAN', Night_Elf= 'NIGHT ELF'
}

export enum Class {
  Warrior = 'WARRIOR', Mage = 'MAGE', Hunter='HUNTER',
  Priest = 'PRIEST', Rogue = 'ROGUE', Paladin='PALADIN',
  Shaman = 'SHAMAN', Warlock = 'WARLOCK', Druid='DRUID',
}

export enum Profession {
  Blacksmith = 'BLACKSMITH', Herbalism = 'HERBALISM',
  Enchanting= 'ENCHANTING', Alchemy='ALCHEMY'
}

