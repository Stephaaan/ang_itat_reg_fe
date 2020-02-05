export interface Config {
  year: number;
  registration_variants: RegistrationVariant[];
  payment_methods: PaymentMethod[];
  time_arrival: TimeArrival[];
  time_departure: TimeDeparture[];
  tshirt_size: TShirtSize[];


}
export interface RegistrationVariant {
  text: string;
  price: number;
  full_registration: boolean;
}
export interface PaymentMethod {
  text: string;
}
export interface TimeArrival {
  text: string;
}
export interface TimeDeparture {
  text: string;
}
export interface TShirtSize {
  text: string;
}
export interface ExtraPayment {
  text: string;
  price: number;
  requires_full_registration: boolean;
}
