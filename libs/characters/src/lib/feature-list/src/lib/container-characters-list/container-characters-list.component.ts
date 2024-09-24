/**ANGULAR*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

/**DEPENDENCIES*/
import { Observable, take, tap } from 'rxjs';
import { RxFor } from '@rx-angular/template/for';
import { RxLet } from '@rx-angular/template/let';

/**CHARACTERS*/
import { CharactersFacade } from '@characters/data-access';
import { Character, ListUI } from '@characters/util/model';
import { UiCardComponent } from '@characters/ui';
import { ModalCharacterComponent } from '@characters/ui';
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
  private readonly dialog = inject(MatDialog);

  protected cards$: Observable<CardStateMachine[]> = this.facade.cards$;
  protected ui$: Observable<ListUI> = this.facade.listUI$;

  ngOnInit(): void {
    this.facade.findAll();
  }

  // modal service
  openCharacterModal(id: string): void {
     this.facade.findById(id).pipe(
       take(1),
       tap((character: Character): void => {
         this.dialog.open(ModalCharacterComponent, {
           width: '700px',
           data: character,
         });
       })
     ).subscribe()
  }
}
