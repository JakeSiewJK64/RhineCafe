import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { ExperienceDialogComponent } from './biography/_dialogs/experience-dialog/experience-dialog.component';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';
import { GithubTutorialComponent } from './github-blog/github-tutorial/github-tutorial.component';
import { GithubPrComponent } from './github-blog/github-pr/github-pr.component';
import { GithubCherryComponent } from './github-blog/github-cherry/github-cherry.component';
import { GithubPrivateComponent } from './github-blog/github-private/github-private.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PersonalExperienceComponent } from './personal-experience/personal-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { PersonalEducationComponent } from './personal-education/personal-education.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ExperienceDialogComponent,
    ScrollToTopComponent,
    GithubTutorialComponent,
    GithubPrComponent,
    GithubCherryComponent,
    GithubPrivateComponent,
    AboutPageComponent,
    PersonalExperienceComponent,
    PersonalProjectsComponent,
    PersonalEducationComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
