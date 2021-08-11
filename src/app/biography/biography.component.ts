import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import { BioDescription, DisplayLanguage, educations, experiences, frameworks, ProgrammingKnowledge, ProgrammingLanguage, ResumeUrl, social_buttons, SpokenLanguage, SpokenLanguages, tools, UsernameEN } from '../shared/english.constants';
import { UsernameJP } from '../shared/japanese.constants';
import { EventEmitterService } from '../shared/services/event-emitter.service';
import { ExperienceDialogComponent } from './_dialogs/experience-dialog/experience-dialog.component';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  constructor(private dialogService: TdDialogService,
    private router: Router,
    private eventEmitterService: EventEmitterService) { }

  description: string = BioDescription;

  username: string = UsernameEN;
  educations: any[] = educations;
  social_buttons: any[] = social_buttons;
  tools: any[] = tools;
  frameworks: any[] = frameworks;
  work_experience = experiences;
  programming_knowledge: ProgrammingLanguage[] = ProgrammingKnowledge.sort((x, y) => y.level - x.level);
  spoken_languages: SpokenLanguage[] = SpokenLanguages.sort((x, y) => y.level - x.level);

  ngOnInit(): void {
    this.eventEmitterService.eventEmitter.subscribe(x => this.load());
  }

  load() {
    console.log("something");
    this.username = localStorage.getItem(DisplayLanguage) === 'jp' ? UsernameJP : UsernameEN;
  }

  download() {
    window.location.href = ResumeUrl;
  }

  showDialog(company: string) {
    this.dialogService.open(ExperienceDialogComponent, {
      width: "80vw",
      data: {
        company: company
      }
    })
  }
}
