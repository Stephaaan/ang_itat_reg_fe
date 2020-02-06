import { RegistrationsService } from './../services/registrations.service';
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

  constructor(private fb: FormBuilder, private configService: ConfigService, private registration: RegistrationsService) {
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
  onSubmit() {
    console.log(this.mainFormGroup)
    this.formData.name = this.mainFormGroup.value.name;
    this.formData.surname = this.mainFormGroup.value.surname;
    this.formData.email = this.mainFormGroup.value.email;
    this.formData.organisation = this.mainFormGroup.value.organisation;
    this.formData.address = this.mainFormGroup.value.address;
    this.formData.crn = this.mainFormGroup.value.crn;
    this.formData.vat = this.mainFormGroup.value.vat;
    this.formData.regvariant = this.mainFormGroup.value.regVariant;
    this.formData.paymethod = this.mainFormGroup.value.payment;
    this.formData.timearrival = this.config.time_arrival.find(item => item.id === +this.mainFormGroup.value.toa).text || "";
    this.formData.timedeparture = this.config.time_departure.find(item => item.id === +this.mainFormGroup.value.tod).text || "";
    this.formData.shirtsize = this.mainFormGroup.value.tshirt;
    this.formData.singleBedroom = this.mainFormGroup.value.singleBedroom;
    this.formData.foodreq = this.mainFormGroup.value.foodRequests;
    this.formData.banket = this.config.banket.find(item => item.id === this.mainFormGroup.value.banket).text;
    this.formData.notesroom = this.mainFormGroup.value.notes;
    this.formData.accommodation = this.mainFormGroup.value.companion.map(c => ({from: this.config.time_arrival.find(item => item.id === +c.from).text|| "", to: this.config.time_departure.find(item => item.id === +c.to).text || "", name: c.name}))
    console.log(this.formData)
    this.registration.register(this.formData).subscribe(response => console.log(response));

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
