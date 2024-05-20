import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'notificacion',
    loadComponent: () => import('./Pagina/notificacion/notificacion.page').then( m => m.NotificacionPage)
  },
];
