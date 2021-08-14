import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { GithubCherryComponent } from './github-cherry/github-cherry.component';
import { GithubPrComponent } from './github-pr/github-pr.component';
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
    path: "jp",
    loadChildren: () => import('./jpmodule/jpmodule.module').then(m => m.JpmoduleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
