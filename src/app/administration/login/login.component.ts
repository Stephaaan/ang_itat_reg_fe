import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.loginService.login(this.login, this.password).subscribe(response => console.log(response));
  }
}

