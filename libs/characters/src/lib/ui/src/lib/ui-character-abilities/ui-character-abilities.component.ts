/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

/**CHARACTERS*/
import { CharacterAbilitiesData } from '@characters/util/model';

@Component({
  selector: 'characters-ui-abilities',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './ui-character-abilities.component.html',
  styleUrl: './ui-character-abilities.component.scss',
})
export class UiCharacterAbilitiesComponent {
  @Input()
  data!: CharacterAbilitiesData;
}
