import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Character, Class } from '@characters/util/model';
import {
  TemplateModalComponent,
  TemplateModalFooterComponent,
  TemplateModalHeaderComponent
} from '@shared/ui/template-modal';
import { CloseButtonDirective } from '@shared/util/directives';
import { UiCharacterStatsComponent } from '../ui-character-stats/ui-character-stats.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'characters-modal-character',
  standalone: true,
  imports: [CommonModule, MatIcon, MatDialogModule, TemplateModalComponent, TemplateModalHeaderComponent, TemplateModalFooterComponent, CloseButtonDirective, UiCharacterStatsComponent, MatButton],
  templateUrl: './modal-character.component.html',
  styleUrl: './modal-character.component.scss',
})
export class ModalCharacterComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Character) {}

  // refactor it to pipe
  classLore(characterClass: Class): string {
    switch (characterClass) {
      case Class.Warrior:
        return 'The mightiest soldiers, unmatched in combat strength.';
      case Class.Shaman:
        return 'Spiritual leaders, calling upon the elements to vanquish foes.';
      case Class.Mage:
        return 'Masters of arcane magic, bending reality to their will.';
      case Class.Rogue:
        return 'Silent assassins, striking from the shadows.';
      case Class.Priest:
        return 'Holy protectors, healing allies and smiting enemies.';
      default:
        return 'A hero of unknown origins, on a quest for glory.';
    }
  }
}
