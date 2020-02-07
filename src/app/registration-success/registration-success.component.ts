import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormData} from '../entities/FormData.model';
@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent {
  public formData: FormData | null =  null /*{
    name: 'Stefan',
surname: 'Rothmajer',
email: 'rothmajerstefan@gmail.com',
organisation: 'ITSovy',
address: 'SNP 231, 05564 Mnisek nad Hnilcom',
crn: '111',
vat: '222',
// tslint:disable-next-line: max-line-length
regvariant: 'Intelligent speech and audio technologies workshop - Student registration - student presenting paper 130€ (fee + digital almanach + coffee breaks + banket + accommodation + full board for 2 nights) ',
// tslint:disable-next-line: max-line-length
paymethod: 'Bank transfer (bank account: 2628717743/1100 (Tatra banka, a.s. Hodžovo namestie 3, 811 06 Bratislava), IBAN SK50 1100 0000 0026 2871 7743, SWIFT: TATR SK BX (Slovenská spoločnosť pre umelú inteligenciu (SAIS), Letná 9, 040 00 Košice). Please, after the bank transfer, send us the confirmation of payment to peter.gursky@upjs.sk.',
shirtsize: 'S',
singleBedroom: 'false',
foodreq: '',
notesroom: '',
accommodation: [],
timearrival: '22. 9. (Sunday) - start with dinner',
timedeparture: '22. 9. (Sunday) - start with dinner',
banket: '',
price: 130,
prefferedCompanion: '',
  } */
  constructor(private router: Router) {
    if(router.getCurrentNavigation().extras.state)
      this.formData = router.getCurrentNavigation().extras.state.data;
    console.log(this.formData)
  }

}
