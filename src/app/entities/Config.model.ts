export interface Config {
  year: number;
  registration_variants: RegistrationVariant[];
  payment_methods: PaymentMethod[];
  time_arrival: TimeArrival[];
  time_departure: TimeDeparture[];
  tshirt_size: TShirtSize[];
  banket: Banket[];
  accomodation: { price: number };
  special_requests: SpecialRequest[];
  singleBedroom: ExtraPayment;
}
export interface RegistrationVariant {
  id: number;
  text: string;
  price: number;
  full_registration: boolean;
}
export interface PaymentMethod {
  text: string;
}
export interface TimeArrival {
  id: number;
  text: string;
}
export interface TimeDeparture {
  id: number;
  text: string;
}
export interface TShirtSize {
  text: string;
}
export interface ExtraPayment {
  soldOut: boolean;
  soldOutNote: string;
  text: string;
  price: number;
  requires_full_registration: boolean;
}
export interface Banket {
  id: number;
  text: string;
  price: number;
}
export interface SpecialRequest {
  text: string;
}
