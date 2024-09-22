/**DEPENDENCIES*/
import { RxState } from '@rx-angular/state/lib/rx-state';

/**INTERNALS*/
import { calculateCharacterStatistics } from '../util/functions/statistics';
import { CharactersState } from './characters.model';
import { mapDomainToCharacter } from '../util/functions/mapper.';
import { listAccent, listBorder } from '../util/functions/ui';
import { CharacterDomain } from '../entity/character.entity';

export function setFindAllState(
  state: RxState<CharactersState>,
  characterDomains: CharacterDomain[]
): void {
  const stats = calculateCharacterStatistics(characterDomains);
  const level: number = stats.totalLevels / stats.totalCharacters;
  state.set({
    characters: {
      data: characterDomains.map(mapDomainToCharacter),
      ui: {
        border: listBorder(level),
        accent: listAccent(stats.hordeCount, stats.allianceCount),
      },
    },
  });
}
