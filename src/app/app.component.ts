import { Component } from '@angular/core';
import { AlterLinkEN, DisplayLanguage, RhineCafeEN } from './shared/english.constants';
import { AlterLinkJP, RhineCafeJP } from './shared/japanese.constants';
import { EventEmitterService } from './shared/services/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventEmitter: EventEmitterService) {
    this.checkLanguage();
  }
  
  currentLanguage: string = 'jp';
  isEN: boolean = true;
  title: string = this.isEN ? RhineCafeEN : RhineCafeJP;
  date: Date = new Date();
  alter_links: any[] = this.isEN ? AlterLinkEN : AlterLinkJP;

  checkLanguage() {
    if (localStorage.getItem("DisplayLanguage") === "jp") {
      this.currentLanguage = 'jp';
    } else {
      this.currentLanguage = '/'
    }
  }

  load() {
    this.title = this.isEN ? RhineCafeEN : RhineCafeJP;
    this.alter_links = this.isEN ? AlterLinkEN : AlterLinkJP;
  }

  switchLanguage() {
    if (this.currentLanguage === '/') this.currentLanguage = 'jp';
    else this.currentLanguage = '/';
    this.isEN = this.currentLanguage === '/';
    localStorage.setItem(DisplayLanguage, localStorage.getItem(DisplayLanguage) === 'jp' ? 'en' : 'jp');
    this.eventEmitter.updateLanguage();
    this.load();
  }
}
