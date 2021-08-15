import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BiographyComponent } from './biography/biography.component';
import { GithubCherryComponent } from './github-blog/github-cherry/github-cherry.component';
import { GithubPrComponent } from './github-blog/github-pr/github-pr.component';
import { GithubPrivateComponent } from './github-blog/github-private/github-private.component';
import { GithubTutorialComponent } from './github-blog/github-tutorial/github-tutorial.component';
import { PersonalEducationComponent } from './personal-education/personal-education.component';
import { PersonalExperienceComponent } from './personal-experience/personal-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';

const routes: Routes = [
  {
    path: "",
    component: BiographyComponent,
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutPageComponent,
    pathMatch: 'full'
  },
  {
    path: "experience",
    component: PersonalExperienceComponent,
    pathMatch: 'full'
  },
  {
    path: "projects",
    component: PersonalProjectsComponent,
    pathMatch: 'full'
  },
  {
    path: "education",
    component: PersonalEducationComponent,
    pathMatch: 'full'
  },
  {
    path: "github-tutorial",
    component: GithubTutorialComponent,
    pathMatch: 'full'
  },
  {
    path: "github-pr",
    component: GithubPrComponent,
    pathMatch: 'full'
  },
  {
    path: "github-cherry",
    component: GithubCherryComponent,
    pathMatch: 'full'
  },
  {
    path: "github-private-collaborate",
    component: GithubPrivateComponent,
    pathMatch: 'full'
  },
  {
    path: "jp",
    loadChildren: () => import('./jpmodule/jpmodule.module').then(m => m.JpmoduleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
