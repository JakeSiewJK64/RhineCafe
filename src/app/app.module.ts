import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { ExperienceDialogComponent } from './biography/_dialogs/experience-dialog/experience-dialog.component';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';
import { GithubTutorialComponent } from './github-tutorial/github-tutorial.component';
import { GithubPrComponent } from './github-pr/github-pr.component';
import { GithubCherryComponent } from './github-cherry/github-cherry.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ExperienceDialogComponent,
    ScrollToTopComponent,
    GithubTutorialComponent,
    GithubPrComponent,
    GithubCherryComponent,
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
