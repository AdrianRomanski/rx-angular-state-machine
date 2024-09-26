/**ANGULAR*/
import { inject, Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { map, Observable, switchMap, tap } from 'rxjs';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';

/**INTERNALS*/
import { CharactersInfrastructureService } from '../infrastructure/characters-infrastructure.service';
import { CardStateMachine, CharactersState } from './characters.model';
import { BORDER_STYLE_1_10 } from '../util/const/border';
import { HORDE_ACCENT } from '../util/const/accent';
import { listAccent, listBorder } from '../util/functions/ui';
import { CharactersStatistics } from '../model/statistics';
import { calculateCharacterStatistics } from '../util/functions/statistics';

/**CHARACTERS*/
import { ListUI } from '@characters/util/model';
import {
  mapDomainToCharacter,
  mapToCardStateMachine,
} from '../util/functions/mapper.';
import { CharacterModalService } from '@characters/ui';

@Injectable({ providedIn: 'root' })
export class CharactersFacade {
  readonly actions = rxActions<{
    findAll: void;
    openCharacterModal: { id: string };
  }>();
  private readonly infrastructure = inject(CharactersInfrastructureService);
  private readonly modalService = inject(CharacterModalService);

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
            map((characterDomains) => {
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
  });

  public readonly listUI$: Observable<ListUI> = this.state.select(
    'characters',
    'ui'
  );
  public readonly cards$: Observable<CardStateMachine[]> = this.state.select(
    'characters',
    'data'
  );

  private openCharacterModalEffect = this.actions.onOpenCharacterModal((id$) =>
    id$.pipe(
      switchMap(({ id }) => {
        return this.infrastructure.findById(id).pipe(
          map(mapDomainToCharacter),
          tap((s) => {
            this.modalService.openCharacterModal(s);
          })
        );
      })
    )
  );
}
