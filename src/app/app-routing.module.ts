import { ViewRegistrationsComponent } from "./administration/view-registrations/view-registrations.component";
import { LoginComponent } from "./administration/login/login.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "administration/login",
    component: LoginComponent
  },
  {
    path: "administration/lol",
    component: ViewRegistrationsComponent
  },
  {
    path: "**",
    component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
