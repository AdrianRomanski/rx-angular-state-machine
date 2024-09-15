/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';

/**CHARACTERS*/
import {
  AllianceRace,
  Character,
  Class,
  HordeRace,
  Profession
} from '@characters/util/model';

const HORDE = 'HORDE';

export function mapDomainToCharacter(domain: CharacterDomain): Character {
  return {
    id: domain.id,
    name: domain.name,
    level: domain.level,
    race: mapToRace(domain.faction, domain.race),
    class: Class[domain.class as keyof typeof Class],
    profession: Profession[domain.profession as keyof typeof Profession]
  }
}

function mapToRace(faction: string, race: string): HordeRace | AllianceRace {
  return faction === HORDE
    ? HordeRace[race as keyof typeof HordeRace]
    : AllianceRace[race as keyof typeof AllianceRace];
}
