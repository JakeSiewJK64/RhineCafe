import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-tutorial',
  templateUrl: './github-tutorial.component.html',
  styleUrls: ['./github-tutorial.component.scss']
})
export class GithubTutorialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-pr']);
  }

}
