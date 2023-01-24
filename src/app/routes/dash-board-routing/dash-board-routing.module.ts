import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes = [

  {
    path : '',
    redirectTo : 'index',
    pathMatch : 'full'
  },
  {
    path : 'index',
    loadChildren : ()=> import('../../views/dashboard/index/index.module').then(m=> m.IndexPageModule)
  },
  {
    path : 'profil',
    loadChildren : ()=> import('../../views/dashboard/profil/profil.module').then(m=> m.ProfilPageModule)
  },


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class DashBoardRoutingModule { }
