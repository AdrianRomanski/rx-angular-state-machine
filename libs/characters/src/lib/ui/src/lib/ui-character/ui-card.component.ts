/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { RxFor } from '@rx-angular/template/for';

/**CHARACTERS*/
import { AllianceRace, Class, HordeRace } from '@characters/util/model';

// not sure if i should keep it here
export interface UiCharacter {
  name: string;
  race: HordeRace | AllianceRace;
  class: Class;
  level: number;
  faction: string;
}

@Component({
  selector: 'characters-ui-card',
  standalone: true,
  imports: [CommonModule, RxFor],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss',
})
export class UiCardComponent {
  @Input()
  ui!: UiCharacter;

  getLevelProgress(level?: number): string {
    const maxLevel = 70; // Example max level, adjust based on game logic
    const progressPercentage = (level || 1 / maxLevel) * 100;
    return `${progressPercentage}%`;
  }

  getClassIcon(className?: string): string {
    const classIcons = {
      'Warrior': 'fas fa-shield-alt',
      'Mage': 'fas fa-hat-wizard',
      'Hunter': 'fas fa-bullseye',
      'Paladin': 'fas fa-gavel',
      // Add other class icons here
    };
    // @ts-ignore
    return classIcons[className] | '' || 'fas fa-question'; // Default icon
  }

}
