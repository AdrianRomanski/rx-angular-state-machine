/**ANGULAR*/
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**INTERNALS*/
import { ModalCharacterComponent } from './modal-character/modal-character.component';

/**CHARACTER*/
import { CharacterStateMachine } from '@characters/data-access';

@Injectable({
  providedIn: 'root',
})
export class CharacterModalService {
  private readonly dialog = inject(MatDialog);

  openCharacterModal(character: CharacterStateMachine): void {
    this.dialog.open(ModalCharacterComponent, {
      width: '700px',
      data: character,
    });
  }
}
