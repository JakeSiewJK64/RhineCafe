import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import { BioDescriptionEN, DisplayLanguage, UsernameEN } from '../shared/english.constants';
import { UsernameJP, BioDescriptionJP } from '../shared/japanese.constants';
import { EventEmitterService } from '../shared/services/event-emitter.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  isEN: boolean = false;

  constructor(private dialogService: TdDialogService,
    private router: Router,
    private eventEmitterService: EventEmitterService) {
  }

  username: string = UsernameEN;
  description: string = BioDescriptionEN;

  ngOnInit(): void {
    this.eventEmitterService.eventEmitter.subscribe(x => this.load());
    this.load();
  }

  checkLanguage() {
    this.isEN = !(localStorage.getItem(DisplayLanguage) === 'en');
  }

  load() {
    this.checkLanguage();
    this.username = !this.isEN ? UsernameJP : UsernameEN;
    this.description = !this.isEN ? BioDescriptionJP : BioDescriptionEN;
  }

}
