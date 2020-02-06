import { Config } from './../entities/Config.model';
import { ConfigService } from './../services/config.service';

import { Component, OnInit, } from '@angular/core';

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

  private price = 0;
  private hasFullRegistration = false;

  constructor(private fb: FormBuilder, private configService: ConfigService) {
    this.mainFormGroup = this.fb.group({
      name: this.setupTextFormControl(),
      surname: this.setupTextFormControl(),
      email: ['', [Validators.required, Validators.email]],
      organisation: ['', [Validators.required]],
      address: ['', [Validators.required]],
      crn: [''],
      vat: [''],
      regVariant: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      toa: [''],
      tod: [''],
      tshirt: ['', Validators.required],
      singleBedroom: [false],
      foodRequests: [''],
      banket: [],
      notes: [''],
      companion: this.fb.array([])

    })
    this.mainFormGroup.valueChanges.subscribe(form => this.onFormValueChanges(form));

  }
  setupTextFormControl() {
    return ["", [Validators.required, Validators.minLength(3)]]
  }
  get companion(){
    return this.mainFormGroup.get('companion') as FormArray
  }
  addCompanion() {
    // just push new formgroup to the form array (rendering in for loop in template)
    this.mainFormGroup.get('companion').push(this.fb.group({
      name: this.setupTextFormControl(),
      from: [this.mainFormGroup.value.toa],
      to: [this.mainFormGroup.value.tod]
    }));
  }
  removeCompanion(i: number) {
    this.mainFormGroup.get('companion').removeAt(i);
  }
  ngOnInit() {
    this.configService.getConfig().subscribe(config => this.config = config);
  }
  onSubmit() {
    console.log(this.mainFormGroup);
  }
  onFormValueChanges(form) {
    this.price = this.calculatePrice(form);
    this.hasFullRegistration = this.checkFullRegistration(form);
    // if user has not full registration, reset singleBedroom checkbox value 
    // (invisibility of field in form when user has not full registration, is defined in template)
    if (!this.hasFullRegistration) {
      this.mainFormGroup.controls.singleBedroom.value = false;
    }
  }
  checkFullRegistration (form) {
    // get selected variant
    const selectedVariant = this.config.registration_variants.find(item => item.id === form.regVariant);
    if (selectedVariant){
      // return value of full registration field of variant
      return selectedVariant.full_registration;
    }
    return false;
  }
  calculatePrice(form) {
    // default reset price to zero and then checks every field which has impact to price and 
    // add his price to the final price
    let price = 0;
    if (form.regVariant) {
      price += this.config.registration_variants.find(variant => variant.id === form.regVariant).price || 0;
    }
    if (form.singleBedroom) {
      price += this.config.singleBedroom.price;
    }
    if (form.banket) {
      price += this.config.banket.find(banket => banket.id === form.banket).price || 0;
    }
    // get count of form controls for adding accomodation (1 control = 1 person) and multiply it by price of accomodation for one person
    price += form.companion.length * this.config.accomodation.price;
    return price;
  }
}
// TODO: checkbox disabled
      /*
       It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
      you. We recommend using this approach to avoid 'changed after checked' errors.

      Example:
      form = new FormGroup({
        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        last: new FormControl('Drew', Validators.required)
      });

      */
// TODO: graphical tweaks plz
