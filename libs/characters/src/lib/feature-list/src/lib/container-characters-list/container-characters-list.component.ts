/**ANGULAR*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { Observable } from 'rxjs';
import { RxFor } from '@rx-angular/template/for';
import { RxLet } from '@rx-angular/template/let';
import { rxEffects } from '@rx-angular/state/effects';

/**CHARACTERS*/
import { CharactersFacade, CharacterStateMachine } from '@characters/data-access';
import { ListUI } from '@characters/util/model';
import { CharacterModalService, UiCardComponent } from '@characters/ui';
import { CardStateMachine } from '@characters/data-access';

/**SHARED*/
import { SharedBorderDirective } from '@shared/util/directives';

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
  private readonly modalService = inject(CharacterModalService);

  protected cards$: Observable<CardStateMachine[]> = this.facade.cards$;
  protected ui$: Observable<ListUI> = this.facade.listUI$;
  protected modal$: Observable<CharacterStateMachine> = this.facade.character$;

  readonly effects = rxEffects(({ register }) => {
    register(this.modal$, (stateMachine) => {
      this.modalService.openCharacterModal(stateMachine);
    });
  });

  ngOnInit(): void {
    this.facade.actions.findAll();
  }

  openCharacterModal(id: string): void {
     this.facade.actions.findById({id});
  }
}
