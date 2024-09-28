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
import { UiCharacterLoreComponent } from '../ui-character-lore/ui-character-lore.component';
import { UiCharacterAbilitiesComponent } from '../ui-character-abilities/ui-character-abilities.component';
import { UiCharacterEquipmentComponent } from '../ui-character-equipment/ui-character-equipment.component';

/**CHARACTERS*/
import { CharacterStateMachine } from '@characters/data-access';

/**SHARED*/
import {
  TemplateModalComponent,
  TemplateModalFooterComponent,
  TemplateModalHeaderComponent
} from '@shared/ui/template-modal';
import {
  ActionButtonDirective,
  CloseButtonDirective,
  SharedBorderDirective
} from '@shared/util/directives';
import { ActionStateMachine, CharacterModalActions } from '@shared/util/model';
import { assertUnreachable } from '@shared/util/functions';

type DialogFooterActions = ActionStateMachine<CharacterModalActions>;

@Component({
  selector: 'characters-modal-character',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatIcon,
    MatButton,
    MatDialogModule,
    RxFor,
    CloseButtonDirective,
    ActionButtonDirective,
    TemplateModalComponent,
    TemplateModalHeaderComponent,
    TemplateModalFooterComponent,
    UiCharacterStatsComponent,
    UiCharacterLoreComponent,
    UiCharacterAbilitiesComponent,
    UiCharacterEquipmentComponent,
    SharedBorderDirective,
  ],
  templateUrl: './modal-character.component.html',
  styleUrl: './modal-character.component.scss',
})
export class ModalCharacterComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public stateMachine: CharacterStateMachine) {}

  protected onActionButtonClick(dialogActions: DialogFooterActions): void {
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
