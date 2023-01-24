import { LoginPage } from './../../views/auth/login/login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { RegisterPage } from 'src/app/views/auth/register/register.page';
import { ForgotPasswordPage } from 'src/app/views/auth/forgot-password/forgot-password.page';

const routes : Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    loadChildren : ()=> import('../../views/auth/login/login.module').then(m=> m.LoginPageModule)
  },
  {
    path : 'register',
    loadChildren : ()=> import('../../views/auth/register/register.module').then(m=> m.RegisterPageModule)
  },
  {
    path : 'forgot-password',
    loadChildren : ()=> import('../../views/auth/forgot-password/forgot-password.module').then(m=> m.ForgotPasswordPageModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports :[RouterModule]
})
export class AuthentificationRoutingModule { }
