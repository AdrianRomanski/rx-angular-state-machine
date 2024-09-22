/**ANGULAR*/
import { inject, Injectable } from '@angular/core';

/**DEPENDENCIES*/
import {  Observable, switchMap, tap } from 'rxjs';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';

/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';
import { CharactersInfrastructureService } from '../infrastructure/characters-infrastructure.service';
import { CharactersState } from './characters.model';
import { BORDER_STYLE_1_10 } from '../util/const/border';
import { HORDE_ACCENT } from '../util/const/accent';
import { setFindAllState } from './characters.setter';

/**CHARACTERS*/
import { Character, ListUI } from '@characters/util/model';

@Injectable({ providedIn: 'root' })
export class CharactersFacade {
  public readonly actions = rxActions<{ findAll: void }>();
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
  public readonly characters$: Observable<Character[]> = this.state.select(
    'characters',
    'data'
  );

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
