import { Injectable } from '@angular/core';
import { differenceInYears, addDays, addYears, differenceInMonths, addMonths, differenceInDays } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDiffToNow(diff: string | number | Date): any {

    const result: string[] = ['Bạn đã sống : '];
    const now = new Date();
    diff = new Date(diff);

    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} năm `);
      diff = addYears(diff, years);
    }

    const months = differenceInMonths(now, diff);
    if (months > 0) {
      result.push(`${months} tháng `);
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} ngày `);
      diff = addDays(diff, days);
    }

    return result.join('');
  }
}
