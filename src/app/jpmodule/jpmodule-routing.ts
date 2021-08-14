import { RouterModule, Routes } from '@angular/router';
import { JpGithubPrComponent } from './github-jp/jp-github-pr/jp-github-pr.component';
import { JpGithubTutorialComponent } from './github-jp/jp-github-tutorial/jp-github-tutorial.component';

const routes: Routes = [
  {
      path: 'jp-github-tutorial',
      component: JpGithubTutorialComponent,
      pathMatch: 'full'
  },
  {
      path: 'jp-github-pr',
      component: JpGithubPrComponent,
      pathMatch: 'full'
  },
];

export const routing = RouterModule.forChild(routes);
