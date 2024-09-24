/**ANGULAR*/
import { inject, Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { map, Observable, switchMap, tap } from 'rxjs';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';

/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';
import { CharactersInfrastructureService } from '../infrastructure/characters-infrastructure.service';
import { CardStateMachine, CharactersState } from './characters.model';
import { BORDER_STYLE_1_10 } from '../util/const/border';
import { HORDE_ACCENT } from '../util/const/accent';
import { setFindAllState } from './characters.setter';

/**CHARACTERS*/
import { Character, ListUI } from '@characters/util/model';
import { mapDomainToCharacter, mapToCardStateMachine } from '../util/functions/mapper.';
import { listAccent, listBorder } from '../util/functions/ui';
import { CharactersStatistics } from '../model/statistics';
import { calculateCharacterStatistics } from '../util/functions/statistics';

@Injectable({ providedIn: 'root' })
export class CharactersFacade {

  // for tommorrow open modal action
  readonly actions = rxActions<{
    findAll: void
  }>();
  private readonly infrastructure = inject(CharactersInfrastructureService);

  private state = rxState<CharactersState>(({ set, connect }) => {
    set({
      characters: {
        data: [],
        ui: { border: BORDER_STYLE_1_10, accent: HORDE_ACCENT },
      },
    });
  });

  public readonly listUI$: Observable<ListUI> = this.state.select(
    'characters',
    'ui'
  );
  public readonly cards$: Observable<CardStateMachine[]> = this.state.select(
    'characters',
    'data'
  );

  public findAll(): void {
    this.actions.findAll();
  }

  // thats fine
  public findById(id: string): Observable<Character> {
    return this.infrastructure.findById(id).pipe(map(mapDomainToCharacter))
  }

  private findAllEffect = this.actions.onFindAll(
    (void$) =>
      void$.pipe(
        switchMap(() => this.infrastructure
          .findAll()
          .pipe(
            tap((domain:CharacterDomain[]) => setFindAllState(this.state, domain))
          )
      )),
    (v) => console.log('side effect triggered', v)
  );
}
