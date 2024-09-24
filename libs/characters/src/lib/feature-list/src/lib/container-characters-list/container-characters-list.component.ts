/**ANGULAR*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { Observable } from 'rxjs';
import { RxFor } from '@rx-angular/template/for';
import { RxLet } from '@rx-angular/template/let';

/**CHARACTERS*/
import { CharactersFacade } from '@characters/data-access';
import { Character, Class, Faction, HordeRace, ListUI, Profession } from '@characters/util/model';
import { UiCardComponent } from '@characters/ui';

/**SHARED*/
import { SharedBorderDirective } from '@shared/util/directives';
import { CardStateMachine } from '../../../../data-access/src/lib/state/characters.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalCharacterComponent } from '../../../../ui/src/lib/modal-character/modal-character.component';

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
    character: Character = {
    id: '1',
    name: 'Thrall',
    level: 100,
    faction: Faction.Horde,
    race: HordeRace.Orc,
    class: Class.Shaman,
    profession: Profession.Blacksmithing,
  };

  private readonly facade = inject(CharactersFacade);

  protected cards$: Observable<CardStateMachine[]> = this.facade.cards$;
  protected ui$: Observable<ListUI> = this.facade.listUI$;

   constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.facade.actions.findAll();
  }

  openCharacterModal(): void {
    this.dialog.open(ModalCharacterComponent, {
      width: '600px',
      data: this.character,
    });
  }
}
