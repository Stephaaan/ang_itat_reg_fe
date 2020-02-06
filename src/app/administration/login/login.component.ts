import { LoginService } from './../../services/login.service';
import { LoginState } from './../../../models/Login.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private login: string;
  private password: string;

  constructor(private auth: AuthService, private loginService: LoginService, private toastr: ToastrService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.login, this.password).subscribe(response => console.log(response));
  }
}
