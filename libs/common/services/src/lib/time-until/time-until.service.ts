import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeUntilService {

  constructor() { }

  determineTimeUntil() {
    let targetDate  = new Date('June 1, 2021').getTime();
    // variables for time units
    let d;
    let h;
    let m;
    let s;
    // input into tag element
    let countdown: BehaviorSubject<any> = new BehaviorSubject('');

    // have the code run every second
    setInterval (function () {
      // get amount of second between now and target date
      const currentDate = new Date().getTime();
      let secondsLeft = (targetDate - currentDate) / 1000;
      // determine amount of days, hours, minutes, seconds remaining
      // as a side note parseInt parses a string and brings it back as an integer
      // @ts-ignore
      d = parseInt(secondsLeft / 86400);
      secondsLeft = secondsLeft % 86400;

      // @ts-ignore
      h = parseInt(secondsLeft / 3600);
      secondsLeft = secondsLeft % 3600;

      // @ts-ignore
      m = parseInt(secondsLeft / 60);
      // @ts-ignore
      s = parseInt(secondsLeft % 60);



      //format and insert into element
      countdown.next(d + 'd, ' +
        h + 'h, ' +
        m + 'm, ' +
        s + 's') ;

    }, 1000);
    return countdown;

  }

}
