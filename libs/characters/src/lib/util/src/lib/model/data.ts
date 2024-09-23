import { AllianceRace, Class, HordeRace } from './character.model';

export interface CardData {
  id: string;
  name: string;
  race: HordeRace | AllianceRace;
  class: Class;
}
