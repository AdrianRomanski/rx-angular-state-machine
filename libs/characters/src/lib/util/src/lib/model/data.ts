import { Ability, AllianceRace, Class, Equipment, Faction, HordeRace, Profession } from './character.model';

export interface CardData {
  id: string;
  name: string;
  race: HordeRace | AllianceRace;
  class: Class;
}

export interface CharacterStatsData {
  level: number;
  race: string;
  class: Class;
  profession: Profession;
  health: number;
  mana: number;
  strength: number;
  agility: number;
  intellect: number;
  stamina: number;
  armor: number;
}

export interface CharacterLoreData {
  name: string;
  race: HordeRace | AllianceRace;
  class: Class;
  profession: Profession;
}

export interface CharacterAbilitiesData {
  abilities: Ability[];
}

export interface CharacterEquipmentData {
  equipment: Equipment[];
}

export interface CharacterModalData {
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
}
