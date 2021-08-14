import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlterBlogInterest, AlterBlogLinks } from '../shared/english.constants';

@Component({
  selector: 'app-github-tutorial',
  templateUrl: './github-tutorial.component.html',
  styleUrls: ['./github-tutorial.component.scss']
})
export class GithubTutorialComponent implements OnInit {

  constructor(private router: Router) { }

  alterLinks: AlterBlogLinks[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.alterLinks = AlterBlogInterest.filter(x => !x.url.includes("github-tutorial"));
  }

  navigateToGithubPR() {
    this.router.navigate(['github-pr']);
  }

  navigatetToBlog(blog: AlterBlogLinks) {
    this.router.navigate([blog.url]);
  }

}
