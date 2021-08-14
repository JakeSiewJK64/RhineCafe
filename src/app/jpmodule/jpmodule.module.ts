import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JpGithubTutorialComponent } from './github-jp/jp-github-tutorial/jp-github-tutorial.component';
import { routing } from './jpmodule-routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    JpGithubTutorialComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class JpmoduleModule { }
