/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

/**CHARACTERS*/
import { CharacterStatsData } from '@characters/util/model';

@Component({
  selector: 'characters-ui-stats',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './ui-character-stats.component.html',
  styleUrl: './ui-character-stats.component.scss',
})
export class UiCharacterStatsComponent {
  @Input()
  data!: CharacterStatsData;
}
