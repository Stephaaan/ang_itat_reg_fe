import { Config } from './../entities/Config.model';
import { ConfigService } from './../services/config.service';
import { Component, OnInit, } from "@angular/core";
import { FormData } from '../entities/FormData.model';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {
  private formData = new FormData();
  private mainFormGroup;
  private config: Config | null = null;

  constructor(private fb: FormBuilder, private configService: ConfigService) {
    this.mainFormGroup = this.fb.group({
      name: this.setupTextFormControl(),
      surname: this.setupTextFormControl(),
      email: ["", [Validators.required, Validators.email]],
      organisation: ["", [Validators.required]],
      address: ["", [Validators.required]],
      crn: [''],
      vat: [''],
      regVariant: ["", [Validators.required]],
    payment: ["", [Validators.required]],
      toa: ["", Validators.required],
      tod: ["", Validators.required],
      tshirt: ["", Validators.required],
      singleBedroom: [false],
      foodRequests: [""],
      notes: [""],
      companion: this.fb.array([])

    })
  }
  setupTextFormControl() {
    return ["", [Validators.required, Validators.minLength(3)]]
  }
  get companion(){
    return this.mainFormGroup.get("companion") as FormArray
  }
  addCompanion() {
    console.log("adding")
    this.mainFormGroup.get("companion").push(this.fb.group({
      name: this.setupTextFormControl(),
      from: ["", Validators.required],
      to: ["", Validators.required]
    }))
  }
  removeCompanion(i:number) {
    this.mainFormGroup.get("companion").removeAt(i);
  }
  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
  }
  onSubmit(){
    console.log(this.mainFormGroup)
  }
}
