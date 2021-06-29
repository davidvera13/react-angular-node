import {RentalModel} from "./rental.model";

export class BookingResponse {
  _id: number;
  startedAt: string;
  price: number;
  guests: number;
  nights: number;
  rental: RentalModel;
  user: string;
  startAt: string;
  endAt: string;

}
