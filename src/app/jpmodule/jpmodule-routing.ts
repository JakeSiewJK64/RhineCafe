import { RouterModule, Routes } from '@angular/router';
import { JpGithubTutorialComponent } from './github-jp/jp-github-tutorial/jp-github-tutorial.component';

const routes: Routes = [
  {
      path: 'jp-github-tutorial',
      component: JpGithubTutorialComponent,
      pathMatch: 'full'
  }
];

export const routing = RouterModule.forChild(routes);
