/**ANGULAR*/
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**DEPENDENCIES*/
import { Observable, of } from 'rxjs';

/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';

const URL = '/api/characters/';

const mockCharacters: CharacterDomain[] = [
  {
    id: "1",
    name: "Thrall",
    race: "Orc",
    class: "Shaman",
    level: 60,
    profession: "Blacksmithing",
    faction: "Horde",
    skills: ["Earth Shock", "Healing Wave"],
    guildId: "guild1",
  },
  {
    id: "2",
    name: "Jaina",
    race: "Human",
    class: "Mage",
    level: 55,
    profession: "Alchemy",
    faction: "Alliance",
    skills: ["Fireball", "Ice Lance"],
    guildId: "guild2",
  },
  {
    id: "3",
    name: "Sylvanas",
    race: "Undead",
    class: "Rogue",
    level: 48,
    profession: "Inscription",
    faction: "Horde",
    skills: ["Stealth", "Backstab"],
    guildId: "guild1",
  },
  {
    id: "4",
    name: "Tyrande",
    race: "Night Elf",
    class: "Druid",
    level: 62,
    profession: "Herbalism",
    faction: "Alliance",
    skills: ["Healing Touch", "Moonfire"],
    guildId: "guild3",
  },
  {
    id: "5",
    name: "Vol'jin",
    race: "Troll",
    class: "Hunter",
    level: 45,
    profession: "Leatherworking",
    faction: "Horde",
    skills: ["Steady Shot", "Camouflage"],
    guildId: "guild1",
  },
  {
    id: "6",
    name: "Genn",
    race: "Worgen",
    class: "Rogue",
    level: 50,
    profession: "Tailoring",
    faction: "Alliance",
    skills: ["Shadowstrike", "Vanish"],
    guildId: "guild2",
  },
  {
    id: "7",
    name: "Kael'thas",
    race: "Blood Elf",
    class: "Mage",
    level: 57,
    profession: "Jewelcrafting",
    faction: "Horde",
    skills: ["Arcane Blast", "Flamestrike"],
    guildId: "guild3",
  },
  {
    id: "8",
    name: "Anduin",
    race: "Draenei",
    class: "Priest",
    level: 59,
    profession: "Enchanting",
    faction: "Alliance",
    skills: ["Flash Heal", "Smite"],
    guildId: "guild2",
  },
  {
    id: "9",
    name: "Drek'Thar",
    race: "Nightborne",
    class: "Shaman",
    level: 40,
    profession: "Engineering",
    faction: "Horde",
    skills: ["Lava Burst", "Spirit Link"],
    guildId: "guild1",
  },
  {
    id: "10",
    name: "Velen",
    race: "Lightforged Draenei",
    class: "Paladin",
    level: 65,
    profession: "Alchemy",
    faction: "Alliance",
    skills: ["Holy Light", "Divine Shield"],
    guildId: "guild3",
  },
  {
    id: "11",
    name: "Zul'jin",
    race: "Zandalari Troll",
    class: "Warlock",
    level: 52,
    profession: "Herbalism",
    faction: "Horde",
    skills: ["Shadow Bolt", "Fear"],
    guildId: "guild1",
  },
  {
    id: "12",
    name: "Khadgar",
    race: "Human",
    class: "Mage",
    level: 58,
    profession: "Enchanting",
    faction: "Alliance",
    skills: ["Arcane Missiles", "Polymorph"],
    guildId: "guild2",
  },
];


@Injectable({ providedIn: 'root' })
export class CharactersInfrastructureService {
  private readonly http: HttpClient = inject(HttpClient)

  findAll(): Observable<CharacterDomain[]> {
    return of(mockCharacters);
  }
}
