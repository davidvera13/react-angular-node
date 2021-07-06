import { Injectable } from '@angular/core';
import * as moment from "moment";
import {Moment} from "moment";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  format(date: string, dateFormat = 'YYYY/MM/DD'): string {
    if(!date) { return ''; }
    return moment(date).format(dateFormat);
  }
  isPastDate(date: moment.Moment): boolean {
    return date.diff(moment(), 'days') < 0;
  }
}
