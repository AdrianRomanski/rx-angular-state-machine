/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

/**CHARACTERS*/
import { CharacterLoreData } from '@characters/util/model';

@Component({
  selector: 'characters-ui-lore',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './ui-character-lore.component.html',
  styleUrl: './ui-character-lore.component.scss',
})
export class UiCharacterLoreComponent {
  @Input()
  data!: CharacterLoreData;
}
