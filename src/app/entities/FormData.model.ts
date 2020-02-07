
export class FormData {
  public _id?: any;
  public name: string;

  public surname: string;

  public email: string;

  public organisation: string;

  public address: string;

  public crn: string;

  public vat: string;

  public regvariant: string;

  public paymethod: string;

  public timearrival: string;

  public timedeparture: string;

  public shirtsize: string;

  public singleBedroom: string;
  public prefferedCompanion: string;
  public accommodation: {from: string; to: string; name: string}[];

  public banket: string;

  // public shirtbuy: string;

  public foodreq: string;

  public notesroom: string;

  public price: number;
}
