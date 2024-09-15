/**ANGULAR*/
import { inject, Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { BehaviorSubject, filter, tap } from 'rxjs';

/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';
import { CharactersService } from '../infrastructure/characters.service';
import { mapDomainToCharacter } from '../util/mappers';

/**CHARACTERS*/
import { Character } from '@characters/util/model';


@Injectable({ providedIn: 'root' })
export class CharactersFacade {
  private readonly service: CharactersService = inject(CharactersService);

  private _characters = new BehaviorSubject<Character[]>([]);
  characters$ = this._characters
    .asObservable()
    .pipe(filter((characters: Character[]) => !!characters));

  list(): void {
    this.service.findAll()
      .pipe(
        tap(((characters: CharacterDomain[]) =>
          this._characters.next(characters.map(mapDomainToCharacter)))
        )
      ).subscribe()
  }
}
