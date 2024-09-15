import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './container-home.component.html',
  styleUrl: './container-home.component.css',
})
export class ContainerHomeComponent {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    // this.dialog.open(DialogAnimationsExampleDialog, {
    //   width: '250px',
    //   enterAnimationDuration,
    //   exitAnimationDuration,
    // });
  }
}
