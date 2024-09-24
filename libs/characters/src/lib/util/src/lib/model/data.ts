import { AllianceRace, Class, HordeRace, Profession } from './character.model';

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
