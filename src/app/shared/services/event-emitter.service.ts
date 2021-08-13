import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }
  eventEmitter = new EventEmitter();
  subsVar: Subscription | undefined;

  updateLanguage() {
    this.eventEmitter.emit();
  }
}
