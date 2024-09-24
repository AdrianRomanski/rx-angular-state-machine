/**ANGULAR*/
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

/**DEPENDENCIES*/
import { RxFor } from '@rx-angular/template/for';

/**INTERNALS*/
import { UiCharacterStatsComponent } from '../ui-character-stats/ui-character-stats.component';

/**CHARACTERS*/
import { Character } from '@characters/util/model';

/**SHARED*/
import {
  TemplateModalComponent,
  TemplateModalFooterComponent,
  TemplateModalHeaderComponent
} from '@shared/ui/template-modal';
import { ActionButtonDirective, CloseButtonDirective } from '@shared/util/directives';
import { ActionStateMachine, CharacterModalActions } from '@shared/util/model';
import { assertUnreachable } from '@shared/util/functions';

type DialogActions = ActionStateMachine<CharacterModalActions>;

enum UpdateReservationAction {
  UPDATE = 'UPDATE',
  VISIT = 'VISIT',
  DELETE = 'DELETE',
}

@Component({
  selector: 'characters-modal-character',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatDialogModule,
    TemplateModalComponent,
    TemplateModalHeaderComponent,
    TemplateModalFooterComponent,
    CloseButtonDirective,
    UiCharacterStatsComponent,
    MatButton,
    ActionButtonDirective,
    RxFor,
  ],
  templateUrl: './modal-character.component.html',
  styleUrl: './modal-character.component.scss',
})
export class ModalCharacterComponent {
  protected readonly actions = UpdateReservationAction;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Character) {}

  protected onActionButtonClick(dialogActions: DialogActions): void {
    switch (dialogActions.action) {
      case CharacterModalActions.TRANSMOG: {
        console.log('transmog');
        break;
      }
      case CharacterModalActions.DELETE: {
        console.log('delete');
        break;
      }
      case CharacterModalActions.VISIT: {
        console.log('visit');
        break;
      }
      case CharacterModalActions.GUILD: {
        console.log('guild');
        break;
      }
      case CharacterModalActions.MOUNT: {
        console.log('mount');
        break;
      }
      default:
        assertUnreachable(dialogActions.action);
    }
  }
}
