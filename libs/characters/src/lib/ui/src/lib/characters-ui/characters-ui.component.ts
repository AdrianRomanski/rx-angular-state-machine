import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'characters-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-ui.component.html',
  styleUrl: './characters-ui.component.css',
})
export class CharactersUiComponent {}
