/**INTERNALS*/
import { CharacterDomain } from '../../entity/character.entity';

/**CHARACTERS*/
import {
  AllianceRace,
  Character,
  Class, Faction,
  HordeRace,
  Profession
} from '@characters/util/model';

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

function mapToRace(faction: string, race: string): HordeRace | AllianceRace {
  return faction === 'Horde'
    ? HordeRace[race as keyof typeof HordeRace]
    : AllianceRace[race as keyof typeof AllianceRace];
}
