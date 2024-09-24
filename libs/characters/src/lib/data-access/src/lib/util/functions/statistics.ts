/**INTERNALS*/
import { CharacterDomain } from '../../entity/character.entity';
import { CharactersStatistics } from '../../model/statistics';

export function calculateCharacterStatistics(
  characters: CharacterDomain[]
): CharactersStatistics  {
  return characters.reduce(
    (acc, character) => {
      acc.totalCharacters += 1;
      acc.totalLevels += +character.level;
      if (character.faction === 'Alliance') {
        acc.allianceCount += 1;
      } else if (character.faction === 'Horde') {
        acc.hordeCount += 1;
      }
      return acc;
    },
    {
      allianceCount: 0,
      hordeCount: 0,
      totalLevels: 0,
      totalCharacters: 0
    }
  );
}
