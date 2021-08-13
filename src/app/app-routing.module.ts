import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { GithubTutorialComponent } from './github-tutorial/github-tutorial.component';

const routes: Routes = [
  {
    path: "",
    component: BiographyComponent,
    pathMatch: 'full'
  },
  {
    path: "github-tutorial",
    component: GithubTutorialComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
