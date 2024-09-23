/**ANGULAR*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { Observable } from 'rxjs';
import { RxFor } from '@rx-angular/template/for';
import { RxLet } from '@rx-angular/template/let';

/**CHARACTERS*/
import { CharactersFacade } from '@characters/data-access';
import { Character, ListUI, Profession } from '@characters/util/model';
import { UiCardComponent } from '@characters/ui';

/**SHARED*/
import { SharedBorderDirective } from '@shared/util/directives';
import { CardStateMachine } from '../../../../data-access/src/lib/state/characters.model';

@Component({
  selector: 'characters-feature-list',
  standalone: true,
  imports: [
    CommonModule,
    RxFor,
    RxLet,
    UiCardComponent,
    SharedBorderDirective
  ],
  templateUrl: './container-characters-list.component.html',
  styleUrl: './container-characters-list.component.scss',
})
export class ContainerCharactersListComponent implements OnInit {
  private readonly facade = inject(CharactersFacade);

  protected cards$: Observable<CardStateMachine[]> = this.facade.cards$;
  protected ui$: Observable<ListUI> = this.facade.listUI$;

  ngOnInit(): void {
    this.facade.actions.findAll();
  }
}
