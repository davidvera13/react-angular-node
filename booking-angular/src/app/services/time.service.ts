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

  getRangeOfDates(startAt: string, endAt: string): string[] {
    const dates = [];
    let mStartAt = moment(new Date(startAt));
    const mEndAt = moment(new Date(endAt));

    while(mStartAt < mEndAt) {
      dates.push(mStartAt.format());
      mStartAt = mStartAt.add(1, 'day');
    }
    return dates;
  }

}
