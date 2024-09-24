/**INTERNALS*/
import { CharacterDomain } from '../../entity/character.entity';
import { CardStateMachine } from '../../state/characters.model';
import { classColor, factionBox, raceColor } from './ui';

/**CHARACTERS*/
import {
  AllianceRace,
  CardData,
  Character,
  Class,
  EquipmentSlot,
  Faction,
  HordeRace,
  Profession,
  Rarity,
  StatType
} from '@characters/util/model';
import { CharacterModalActions } from '@shared/util/model';

export function mapDomainToCharacter(domain: CharacterDomain): Character {
  return {
    id: domain.id,
    name: domain.name,
    level: +domain.level,
    faction: Faction[domain.faction as keyof typeof Faction],
    race: mapToRace(domain.faction, domain.race),
    class: Class[domain.class as keyof typeof Class],
    profession: Profession[domain.profession as keyof typeof Profession],
    health: +domain.health,
    mana: +domain.mana,
    strength: +domain.strength,
    agility: +domain.agility,
    intellect: +domain.intellect,
    stamina: +domain.stamina,
    armor: +domain.armor,
    abilities: domain.abilities.map(ability => ({
      name: ability.name,
      description: ability.description,
      cooldown: +ability.cooldown,
    })),
    biography: domain.biography,
    equipment: domain.equipment.map(item => ({
      name: item.name,
      slot: EquipmentSlot[item.slot as keyof typeof EquipmentSlot],
      rarity: Rarity[item.rarity as keyof typeof Rarity],
      stats: item.stats.map(stat => ({
        statType: StatType[stat.statType as keyof typeof StatType],
        value: +stat.value,
      })),
    })),
    actions: mapToActions(Faction[domain.faction as keyof typeof Faction])
  };
}

export function mapToActions(faction: Faction): string[] {
  if(faction === Faction.Alliance) {
    return [CharacterModalActions.DELETE, CharacterModalActions.TRANSMOG]
  } else {
    return [CharacterModalActions.MOUNT, CharacterModalActions.GUILD]
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
