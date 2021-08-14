import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-cherry',
  templateUrl: './github-cherry.component.html',
  styleUrls: ['./github-cherry.component.scss']
})
export class GithubCherryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-pr']);
  }

}
