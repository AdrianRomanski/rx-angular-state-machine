/**ANGULAR*/
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**DEPENDENCIES*/
import { Observable, of } from 'rxjs';

/**INTERNALS*/
import { CharacterDomain } from '../entity/character.entity';
import { MOCK_CHARACTERS } from './db.const';

const URL = '/api/characters/';

@Injectable({ providedIn: 'root' })
export class CharactersInfrastructureService {
  private readonly http: HttpClient = inject(HttpClient)

  findAll(): Observable<CharacterDomain[]> {
    return of(MOCK_CHARACTERS);
  }

  findById(id: string): Observable<CharacterDomain> {
    return of(MOCK_CHARACTERS[+id-1]);
  }
}
