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
    name: "Thalion",
    race: "NightElf",
    class: "Hunter",
    level: 45,
    profession: "Bowmaster",
    faction: "Alliance",
    skills: ["Archery", "Stealth", "Survival", "Tracking"],
    guildId: "guild-123"
  },
  {
    id: "2",
    name: "Grommash",
    race: "Orc",
    class: "Warrior",
    level: 50,
    profession: "Blacksmith",
    faction: "Horde",
    skills: ["Axe Mastery", "Berserker Rage", "Endurance", "Shield Block"],
    guildId: "guild-456"
  },
  {
    id: "3",
    name: "Lyra",
    race: "Human",
    class: "Mage",
    level: 38,
    profession: "Alchemist",
    faction: "Alliance",
    skills: ["Fireball", "Teleportation", "Arcane Knowledge", "Potion Brewing"],
    guildId: "guild-789"
  },
  {
    id: "4",
    name: "Zal'vok",
    race: "Troll",
    class: "Shaman",
    level: 42,
    profession: "Herbalist",
    faction: "Horde",
    skills: ["Healing", "Elemental Mastery", "Totem Placement", "Windfury"],
    guildId: "guild-012"
  }
];

@Injectable({ providedIn: 'root' })
export class CharactersInfrastructureService {
  private readonly http: HttpClient = inject(HttpClient)

  findAll(): Observable<CharacterDomain[]> {
    return of(mockCharacters);
  }
}
