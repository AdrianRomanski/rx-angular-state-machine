/**ANGULAR*/
import { Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'shared-ui-side-navigation',
  templateUrl: 'side-navigation.component.html',
  styleUrls: ['side-navigation.component.scss'],
  imports: [
    MatToolbar,
    MatSidenavContainer,
    MatIconButton,
    MatNavList,
    MatListItem,
    MatSidenavModule,
    MatIcon,
    NgClass,
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterOutlet
  ],
  standalone: true
})
export class SideNavigationComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isMobile= true;
  isCollapsed = true;

  private readonly destroyRef: DestroyRef = inject(DestroyRef)
  private readonly observer: BreakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((screenSize) => {
        this.isMobile = screenSize.matches;
    });
  }

  toggleMenu(): void {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
