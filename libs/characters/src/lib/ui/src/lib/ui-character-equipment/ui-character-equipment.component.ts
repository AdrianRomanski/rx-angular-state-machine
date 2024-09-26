/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

/**CHARACTERS*/
import { CharacterEquipmentData } from '@characters/util/model';

@Component({
  selector: 'characters-ui-equipment',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './ui-character-equipment.component.html',
  styleUrl: './ui-character-equipment.component.scss',
})
export class UiCharacterEquipmentComponent {
  @Input()
  data!: CharacterEquipmentData;
}
