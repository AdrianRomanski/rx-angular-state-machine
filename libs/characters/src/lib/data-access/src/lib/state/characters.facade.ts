/**ANGULAR*/
import { inject, Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { map, Observable, switchMap } from 'rxjs';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';

/**INTERNALS*/
import { CharactersInfrastructureService } from '../infrastructure/characters-infrastructure.service';
import {
  CardStateMachine,
  CharactersState,
  CharacterStateMachine
} from './characters.model';
import { BORDER_STYLE_1_10 } from '../util/const/border';
import { HORDE_ACCENT } from '../util/const/accent';
import { listAccent, listBorder } from '../util/functions/ui';
import { CharactersStatistics } from '../model/statistics';
import { calculateCharacterStatistics } from '../util/functions/statistics';
import { CharacterDomain } from '../entity/character.entity';
import {
  mapDomainToCharacter,
  mapToCardStateMachine,
} from '../util/functions/mapper.';

/**CHARACTERS*/
import { ListUI } from '@characters/util/model';

@Injectable({ providedIn: 'root' })
export class CharactersFacade {
  readonly actions = rxActions<{
    findAll: void;
    findById:  { id: string };
  }>();
  private readonly infrastructure = inject(CharactersInfrastructureService);

  private state = rxState<CharactersState>(({ set, connect }) => {
    set({
      characters: {
        data: [],
        ui: { border: BORDER_STYLE_1_10, accent: HORDE_ACCENT },
      },
    });
    connect(
      'characters',
      this.actions.findAll$.pipe(
        switchMap(() =>
          this.infrastructure.findAll().pipe(
            map((characterDomains: CharacterDomain[]) => {
              const stats: CharactersStatistics =
                calculateCharacterStatistics(characterDomains);
              const level: number = stats.totalLevels / stats.totalCharacters;
              return {
                data: mapToCardStateMachine(characterDomains),
                ui: {
                  border: listBorder(level),
                  accent: listAccent(stats.hordeCount, stats.allianceCount),
                },
              };
            })
          )
        )
      )
    );
    connect(
      'character',
      this.actions.findById$.pipe(
        switchMap(({id}) =>
          this.infrastructure.findById(id).pipe(
            map((characterDomain: CharacterDomain) => {
              const character = mapDomainToCharacter(characterDomain);
              return {
                data: character,
                ui: { actions: character.actions },
              };
            })
          )
        )
      ),
    );
  });

  public readonly listUI$: Observable<ListUI> = this.state.select(
    'characters',
    'ui'
  );
  public readonly cards$: Observable<CardStateMachine[]> = this.state.select(
    'characters',
    'data'
  );

  public readonly character$: Observable<CharacterStateMachine> = this.state.select(
    'character',
  );
}
