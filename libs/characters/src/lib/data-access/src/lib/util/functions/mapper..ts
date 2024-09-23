/**INTERNALS*/
import { CharacterDomain } from '../../entity/character.entity';

/**CHARACTERS*/
import {
  AllianceRace, CardData, CardUI,
  Character,
  Class, Faction,
  HordeRace,
  Profession
} from '@characters/util/model';
import { classColor, factionBox, raceColor } from './ui';
import { CardStateMachine } from '../../state/characters.model';

export function mapDomainToCharacter(domain: CharacterDomain): Character {
  return {
    id: domain.id,
    name: domain.name,
    level: domain.level,
    race: mapToRace(domain.faction, domain.race),
    class: Class[domain.class as keyof typeof Class],
    profession: Profession[domain.profession as keyof typeof Profession],
    faction: Faction[domain.faction as keyof typeof Faction]
  }
}

export function mapDomainToCardUI(domain: CharacterDomain): CardData {
  return {
    id: domain.id,
    name: domain.name,
    race:  mapToRace(domain.faction, domain.race),
    class: Class[domain.class as keyof typeof Class]
  } as CardData
}

export function mapToRace(faction: string, race: string): HordeRace | AllianceRace {
  return faction === 'Horde'
    ? HordeRace[race as keyof typeof HordeRace]
    : AllianceRace[race as keyof typeof AllianceRace];
}

export function mapToCardStateMachine(characterDomains: CharacterDomain[]): CardStateMachine[] {
  return characterDomains.map((domain: CharacterDomain) => {
    return {
      data: mapDomainToCardUI(domain),
      ui: {
        box: factionBox(Faction[domain.faction as keyof typeof Faction]),
        raceColor: raceColor(mapToRace(domain.faction, domain.race)),
        classColor: classColor(Class[domain.class as keyof typeof Class]),
      },
    };
  });
}
