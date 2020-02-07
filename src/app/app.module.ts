import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { ToastrModule } from "ngx-toastr";

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LoginComponent } from "./administration/login/login.component";
import { ViewRegistrationsComponent } from "./administration/view-registrations/view-registrations.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DisplayAccomodationPipe } from './display-accomodation.pipe';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { TextToDotsPipe } from './text-to-dots.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginComponent,
    ViewRegistrationsComponent,
    DisplayAccomodationPipe,
    RegistrationSuccessComponent,
    TextToDotsPipe
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
