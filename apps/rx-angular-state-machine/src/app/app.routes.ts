/**ANGULAR*/
import { Route } from '@angular/router';

/**CHARACTERS*/
import { CHARACTERS_ROUTES } from '@characters/routes';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./container-home/container-home.component')
      .then((m) => m.ContainerHomeComponent)
  },
  ...CHARACTERS_ROUTES,
  {
    path: '**',
    redirectTo: '/home'
  },
];
