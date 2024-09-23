import { AllianceRace, HordeRace } from '@characters/util/model';

export const RACE_COLORS: { [key: string]: string } = {
  [HordeRace.Orc]: '#4E7B31',
  [HordeRace.Tauren]: '#C7A99B',
  [HordeRace.Undead]: '#B5B5B5',
  [HordeRace.Troll]: '#0095D9',
  [HordeRace.Blood_Elf]: '#D85A8C',
  [HordeRace.Goblin]: '#A1D100',
  [HordeRace.Nightborne]: '#B5A3DA',
  [HordeRace.Highmountain_Tauren]: '#7A5A43',
  [HordeRace.Zandalari_Troll]: '#D5A029',
  [HordeRace.Vulpera]: '#B65A2D',

  [AllianceRace.Gnome]: '#C4E1FF',
  [AllianceRace.Human]: '#E0C3A1',
  [AllianceRace.NightElf]: '#5C5A77',
  [AllianceRace.Draenei]: '#5C9EA0',
  [AllianceRace.Worgen]: '#6F4F4F',
  [AllianceRace.Void_Elf]: '#B4B1D9',
  [AllianceRace.Lightforged_Draenei]: '#E8D69C',
  [AllianceRace.Kul_Tiran]: '#A2A2A2',
  [AllianceRace.Mechagnome]: '#A0A0A0',
};
