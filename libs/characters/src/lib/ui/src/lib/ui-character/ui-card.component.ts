/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { RxFor } from '@rx-angular/template/for';

/**CHARACTERS*/
import { CardData, CardUI } from '@characters/util/model';
import {
  SharedBoxDirective
} from '@shared/util/directives';

@Component({
  selector: 'characters-ui-card',
  standalone: true,
  imports: [
    CommonModule,
    RxFor,
    SharedBoxDirective,
  ],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss',
})
export class UiCardComponent {
  @Input()
  ui!: CardUI;

  @Input()
  data!: CardData;
}
