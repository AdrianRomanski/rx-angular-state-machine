/**ANGULAR*/
import { Route } from '@angular/router';

/**CHARACTERS*/
import { CHARACTERS_ROUTES } from '@characters/routes';

export const appRoutes: Route[] = [
  ...CHARACTERS_ROUTES,
  {
    path: '**',
    redirectTo: '/characters'
  },
];
