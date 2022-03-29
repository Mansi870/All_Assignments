import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(msg: string) {
    let strLogMsg = 'INFO:' + new Date() + ':' + msg;
    console.log(strLogMsg);
  }
  warning(msg: string) {
    let strLogMsg = 'WARNING:' + new Date() + ':' + msg;
    console.warn(strLogMsg);
  }
  error(msg: string) {
    let strLogMsg = 'ERROR:' + new Date() + ':' + msg;
    console.error(strLogMsg);
  }
}
