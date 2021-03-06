import { RegistrationSuccessComponent } from './registration-success/registration-success.component';

import { ViewRegistrationsComponent } from './administration/view-registrations/view-registrations.component';
import { LoginComponent } from './administration/login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationGuard } from './guards/Administration.guard';
import { IsLoggedGuard } from './../guards/is-logged.guard';

const routes: Routes = [
  {
    path: 'administration/login',
    component: LoginComponent
  },
  {
    path: 'administration',
    component: ViewRegistrationsComponent,
    canActivate: [AdministrationGuard]
  },
  {
    path: 'registration-success',
    component: RegistrationSuccessComponent
  },
  {
    path: '**',
    component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
