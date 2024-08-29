import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portfolio/pages/basicPage/basicPage.component'),
  },
  {
    path: 'v2',
    loadComponent: () => import('./portfolio/pages/advancePage/advancePage.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
