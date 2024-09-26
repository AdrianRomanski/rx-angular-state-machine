/**ANGULAR*/
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**INTERNALS*/
import { ModalCharacterComponent } from './modal-character/modal-character.component';
import { Character } from '@characters/util/model';

@Injectable({
  providedIn: 'root',
})
export class CharacterModalService {
  private readonly dialog = inject(MatDialog);

  openCharacterModal(character: Character): void {
    this.dialog.open(ModalCharacterComponent, {
      width: '700px',
      data: character,
    });
  }
}
