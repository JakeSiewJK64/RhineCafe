import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import { BioDescriptionEN, ComputerLanguageEN, DisplayLanguage, DownloadResumeEN, durationEN, EducationEN, educations, ExperienceEN, experiences, FrameworkEN, frameworks, ProgrammingKnowledge, ProgrammingLanguage, ResumeUrl, seemoreEN, social_buttons, SpokenLanguage, SpokenLanguageEN, SpokenLanguagesEN, SpokenLanguagesJP, tools, ToolsEN, UsernameEN } from '../shared/english.constants';
import { BioDescriptionJP, ComputerLanguageJP, DownloadResumeJP, durationJP, EducationJP, ExperienceJP, FrameworksJP, seemoreJP, SpokenLanguageJP, ToolsJP, UsernameJP } from '../shared/japanese.constants';
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
    private eventEmitterService: EventEmitterService) { 
    }

  description: string = BioDescriptionEN;

  isEN: boolean = true;
  username: string = UsernameEN;
  downloadResume: string = DownloadResumeEN;
  educations: any[] = educations;
  displaytools: string = ToolsEN;
  displayframework: string = FrameworkEN;
  social_buttons: any[] = social_buttons;
  tools: any[] = tools;
  seemore: string = seemoreEN;
  frameworks: any[] = frameworks;
  work_experience = experiences;
  displayeducation: string = EducationEN;
  displayspokenlanguage: string = SpokenLanguageEN;
  displaycomputerlanguage: string = ComputerLanguageEN;
  displayexperience: string = ExperienceEN;
  duration: string = durationEN;
  programming_knowledge: ProgrammingLanguage[] = ProgrammingKnowledge.sort((x, y) => y.level - x.level);
  spoken_languages: SpokenLanguage[] = SpokenLanguagesEN.sort((x, y) => y.level - x.level);

  ngOnInit(): void {
    this.eventEmitterService.eventEmitter.subscribe(x => this.load());
  }

  checkLanguage() {
    this.isEN = !(localStorage.getItem(DisplayLanguage) === 'en');
  }

  load() {
    this.checkLanguage();
    this.username = !this.isEN ? UsernameJP : UsernameEN;
    this.description = !this.isEN ? BioDescriptionJP : BioDescriptionEN;
    this.downloadResume = !this.isEN ? DownloadResumeJP : DownloadResumeEN;
    this.displaytools = !this.isEN ? ToolsJP : ToolsEN;
    this.displayframework = !this.isEN ? FrameworksJP : FrameworkEN;
    this.displayeducation = !this.isEN ? EducationJP : EducationEN;
    this.displaycomputerlanguage = !this.isEN ? ComputerLanguageJP : ComputerLanguageEN;
    this.displayspokenlanguage = !this.isEN ? SpokenLanguageJP : SpokenLanguageEN;
    this.displayexperience = !this.isEN ? ExperienceJP: ExperienceEN;
    this.seemore = !this.isEN ? seemoreJP : seemoreEN;
    this.duration = !this.isEN ? durationJP : durationEN;
    this.spoken_languages = !this.isEN ? SpokenLanguagesJP.sort((x, y) => y.level - x.level) : SpokenLanguagesEN.sort((x, y) => y.level - x.level);
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
