import { Route } from '@angular/router';

export const CHARACTER_LIST_ROUTES: Route[] = [
  {
    path: 'characters',
    loadComponent: () => import('./container-characters-list/container-characters-list.component')
      .then((m) => m.ContainerCharactersListComponent)
  }
];
