/**ANGULAR*/
import { Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { Observable, of } from 'rxjs';

/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';
import { MOCK_CHARACTERS } from './db.const';

@Injectable({ providedIn: 'root' })
export class CharactersInfrastructureService {
  findAll(): Observable<CharacterDomain[]> {
    return of(MOCK_CHARACTERS);
  }

  findById(id: string): Observable<CharacterDomain> {
    return of(MOCK_CHARACTERS[+id-1]);
  }
}
