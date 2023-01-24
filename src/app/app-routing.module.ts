import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'auth',
    loadChildren : ()=> import('./modules/authentification.module').then(m=> m.AuthentificationModule)
  },
  {
    path : 'dash',
    loadChildren : ()=> import('./modules/dashboard.module').then(m => m.DashBoardModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/shared/menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
