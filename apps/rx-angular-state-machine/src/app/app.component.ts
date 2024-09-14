/**ANGULAR*/
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**SHARED*/
import { SideNavigationComponent } from '@shared/ui/navigation';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    SideNavigationComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
