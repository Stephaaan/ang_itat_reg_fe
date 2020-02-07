import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RegistrationsService } from './../../services/registrations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.css']
})
export class ViewRegistrationsComponent implements OnInit {
  formData: FormData[] | null = null;
  constructor(private registrations: RegistrationsService, private toastr: ToastrService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.registrations.getAllRegistrations().subscribe(registrations => this.formData = registrations);
  }
  deleteItem(id: string){
    this.registrations.deleteRegistration(id).subscribe(() => {
      this.registrations
        .getAllRegistrations()
        .subscribe(registrations => {
          this.formData = registrations;
          this.toastr.success('Registration has been deleted', 'Success')}
        );
    });
  }
  logout() {
    this.auth.id = "";
    this.auth.token = "";
    console.log("logout")
    this.router.navigate(["/administration/login"])
  }

}
