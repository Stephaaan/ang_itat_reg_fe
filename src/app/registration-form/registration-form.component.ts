import { Component, OnInit, OnChanges } from "@angular/core";
import { FormData } from '../entities/FormData.model';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit, OnChanges {
  private formData = new FormData()
  private mainFormGroup;
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.formData);  
  }
  constructor(private fb: FormBuilder) {
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
  ngOnInit() {}
}
