import { RegistrationsService } from './../../services/registrations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.css']
})
export class ViewRegistrationsComponent implements OnInit {
  formData: FormData[] | null = null;
  constructor(private registrations: RegistrationsService) { }

  ngOnInit() {
    this.registrations.getAllRegistrations().subscribe(registrations => this.formData = registrations);
  }

}
