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
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  constructor(private auth: AuthService, private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    if(this.auth.logged){
      this.router.navigate(['/administration', 'registrations']);
    }
  }
  login(){
    this.userService.login(this.username, this.password).subscribe(response => {
      switch(response){
        case LoginState.BAD_USERNAME:
          this.toastr.error("User not found!", "Login Error")
          break;
        case LoginState.BAD_PASSWORD:
          this.toastr.error("Wrong password!", "Login Error")
          break;
        case LoginState.LOGIN_OK:
          this.toastr.success("Login successful", "Login info");
          this.router.navigate(['..'])
          break;
        default:
          console.log("wtf");
          break;

      }
    })
  }
}

