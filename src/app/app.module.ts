import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { ExperienceDialogComponent } from './biography/_dialogs/experience-dialog/experience-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ExperienceDialogComponent
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
