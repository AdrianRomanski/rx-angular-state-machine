/**ANGULAR*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

/**DEPENDENCIES*/
import { Observable } from 'rxjs';
import { RxFor } from '@rx-angular/template/for';
import { RxLet } from '@rx-angular/template/let';

/**CHARACTERS*/
import { CharactersFacade } from '@characters/data-access';
import { ListUI } from '@characters/util/model';
import { UiCardComponent } from '@characters/ui';
import { ModalCharacterComponent } from '@characters/ui';
import { CardStateMachine } from '@characters/data-access';

/**SHARED*/
import { SharedBorderDirective } from '@shared/util/directives';
import { MOCK_CHARACTERS } from '../../../../data-access/src/lib/infrastructure/db.const';

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
  character = MOCK_CHARACTERS[0];

  private readonly facade = inject(CharactersFacade);

  protected cards$: Observable<CardStateMachine[]> = this.facade.cards$;
  protected ui$: Observable<ListUI> = this.facade.listUI$;

   constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.facade.findAll();
    this.cards$.subscribe((v) => console.log('ui',v.map((s) => s.ui)));
  }

  openCharacterModal(): void {
    this.dialog.open(ModalCharacterComponent, {
      width: '700px',
      data: this.character,
    });
  }
}
