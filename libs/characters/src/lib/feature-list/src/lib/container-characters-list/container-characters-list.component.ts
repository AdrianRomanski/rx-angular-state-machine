/**ANGULAR*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { Observable } from 'rxjs';

/**CHARACTERS*/
import { CharactersFacade } from '@characters/domain';
import { Character } from '@characters/util/model';

@Component({
  selector: 'characters-feature-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-characters-list.component.html',
  styleUrl: './container-characters-list.component.scss',
})
export class ContainerCharactersListComponent implements OnInit{
  private readonly facade = inject(CharactersFacade);

  protected characters$: Observable<Character[]> = this.facade.characters$;

  ngOnInit(): void {
    this.facade.list();
  }
}
